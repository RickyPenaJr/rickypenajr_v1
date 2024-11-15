// Array of titles to cycle through
const titles = ["Ricky Peña", "Data Analyst", "Consultant", "Creator"];
let titleIndex = 0; // Track the current title
let charIndex = 0; // Track the current character being typed
let isDeleting = false; // Track whether we are deleting text

// Function to implement typing effect
function typeEffect() {
    const dynamicText = document.getElementById("dynamic-text");

    if (dynamicText) {
        // Get the current title
        const currentTitle = titles[titleIndex];

        // Determine the portion of the text to display
        const displayedText = isDeleting
            ? currentTitle.substring(0, charIndex--)
            : currentTitle.substring(0, charIndex++);

        // Update the text content
        dynamicText.textContent = displayedText;

        // Adjust typing speed
        const typingSpeed = isDeleting ? 50 : 100; // Faster when deleting

        // If text is fully typed or deleted
        if (!isDeleting && charIndex === currentTitle.length) {
            isDeleting = true; // Start deleting
            setTimeout(typeEffect, 1000); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false; // Start typing next title
            titleIndex = (titleIndex + 1) % titles.length; // Loop back to the start
        }

        // Call the function again after typing speed
        setTimeout(typeEffect, typingSpeed);
    }
}

// Start the typing effect
typeEffect();

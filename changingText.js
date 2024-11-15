// Array of titles to cycle through
const titles = [" Ricky Peña ", " A Data Analyst ", " A Consultant ", " A Creator "];
let titleIndex = 0; // Index of the current title
let charIndex = 0; // Index of the current character
let isDeleting = false; // State: typing or deleting

// Speeds in milliseconds
const typingSpeed = 100; // Speed of typing each character
const deletingSpeed = 100; // Speed of deleting each character
const pauseAtEnd = 1500; // Pause at the end of a word

// Typing effect function
function typeEffect() {
    const dynamicText = document.getElementById("dynamic-text");

    if (dynamicText) {
        // Get the current title
        const currentTitle = titles[titleIndex];

        // Update the text content based on the current state
        if (!isDeleting) {
            // Typing state: Add characters one by one
            charIndex++;
            dynamicText.textContent = currentTitle.substring(0, charIndex);

            // If the word is fully typed, switch to pause state
            if (charIndex === currentTitle.length) {
                isDeleting = true; // Start deleting after the pause
                setTimeout(typeEffect, pauseAtEnd);
                return;
            }
        } else {
            // Deleting state: Remove characters one by one
            charIndex--;
            dynamicText.textContent = currentTitle.substring(0, charIndex);

            // If the word is fully deleted, move to the next word
            if (charIndex === 0) {
                isDeleting = false; // Start typing the next word
                titleIndex = (titleIndex + 1) % titles.length; // Loop back to the first title
                setTimeout(typeEffect, pauseAtEnd);
                return;
            }
        }

        // Call the function again after the appropriate speed
        const delay = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(typeEffect, delay);
    }
}

// Start the typing effect
typeEffect();

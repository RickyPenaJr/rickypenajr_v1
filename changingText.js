// Array of titles to cycle through
const titles = ["Ricky Peña", "Data Analyst", "Consultant", "Creator"];
let titleIndex = 0;

// Function to change the text
function changeTitle() {
    // Get the span element where the dynamic text will appear
    const dynamicText = document.getElementById("dynamic-text");

    if (dynamicText) {
        // Update the text content of the span element
        dynamicText.textContent = titles[titleIndex];

        // Move to the next title, looping back to the start if necessary
        titleIndex = (titleIndex + 1) % titles.length;
    }
}

// Set an interval to call the changeTitle function every 3 seconds
setInterval(changeTitle, 3000);

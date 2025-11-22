// -- ZACHARY HENRY -- //
// --    11/21/25   -- //

// Mood Changer using event delegation.

// Step 1: Select the mood display element from the DOM
const moodDisplay = document.getElementById('moodDisplay');

// Step 2: Define an object with configurations for each mood
// This object holds the background color, text color, and message for each mood
const moods = {
    happy:     { bg: '#ff9800', text: '#3e2723', message: 'Pumpkin spice everything!' },
    calm:      { bg: '#7ddeaeff', text: '#dffff8ff', message: 'Relaxing green!' },
    excited:   { bg: '#ffef44ff', text: '#312910ff', message: 'An energetic yellow!' },
    chill:     { bg: '#b9f8ffff', text: '#5bc3ffff', message: 'Cold, icy blue!' },
    mysterious:{ bg: '#26243bff', text: '#7a7a7aff', message: 'Shadowy and mysterious!!' }
};

// Step 3: Add a single click event listener to the document (event delegation)
// This listens for clicks anywhere on the page and checks if it's a mood button
document.addEventListener('click', function (event) {
    // Check if the clicked element has the class 'mood-btn'
    if (event.target.classList.contains('mood-btn')) {
        // Get the mood from the button's data-mood attribute
        const mood = event.target.getAttribute('data-mood');
    
        // Get the configuration for this mood from the moods object
        const config = moods[mood];

        // Update the background color of the body
        document.body.style.backgroundColor = config.bg;
    
        // Update the text color of the body
        document.body.style.color = config.text;
    
        // Update the display message
        moodDisplay.textContent = config.message;
    }
});
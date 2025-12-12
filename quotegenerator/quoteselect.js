// -- ZACHARY HENRY -- //
// --    12/10/25   -- //

// -- RANDOM MOVIE QUOTE GENERATOR -- //

// Quote display element
const quoteMessage = document.getElementById('quoteMessage');
const quoteAuthor = document.getElementById('quoteAuthor');

// Quotes to choose from
const quoteAmount = 8

const quotes = {
    1: { message: 'With great power, comes great responsibility.', author: '- Spider-Man (2002)' },
    2: { message: "Here's Johnny!",                                author: '- The Shining (1980)' },
    3: { message: "I'll be back.",                                 author: '- The Terminator (1984)' },
    4: { message: "Houston, we have a problem.",                   author: '- Apollo 13 (1995)' },
    5: { message: "I'm king of the world!",                        author: '- Titanic (1997)' },
    6: { message: 'Say "hello" to my little friend!',              author: '- Scarface (1983)' },
    7: { message: "This. Is. Sparta!",                             author: '- 300 (2006)' },
    8: { message: "Wax on, wax off.",                               author: '- The Karate Kid (1984)' },
};

// Function that gets the random quote index and returns it
function randomQuote() {
    // Get a random quote using math.random
    randomRange = Math.floor(Math.random() * quoteAmount) + 1;
    const quote = quotes[randomRange];

    return quote
}

// Runs when generate is pressed
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('quote-btn')) {
        // Call random quote function
        const quote = randomQuote();

        // Update the display message
        quoteMessage.textContent = quote.message;
        quoteAuthor.textContent = quote.author;
    }
});
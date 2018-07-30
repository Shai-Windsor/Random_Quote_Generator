/*
The Random Quote Generator generates a random quote every
time the user presses the "Show another quote" button
*/

var currentNumber;
var currentNumber2;
var timeoutHandler = setTimeout(printQuote, 5000);

var backgroundColors = ['darkred', '#AB6100', 'darkgreen', 'darkblue', 'darkviolet'];

var quotes = [
  {quote: "You cannot shake hands with a clenched fist.",                         source: "Indira Gandhi",                                        year: 1971},
  {quote: "The power of imagination makes us infinite.",                          source: "John Muir",        citation: "John of the Mountains"},
  {quote: "The only way to do great work is to love what you do.",                source: "Steve Jobs",                                           year: 2005},
  {quote: "If I have seen further it is by standing on the shoulders of giants.", source: "Isaac Newton",     citation: "Letter to Robert Hooke", year: 1676},
  {quote: "Not all those who wander are lost.",                                   source: "J. R. R. Tolkien",                                     year: 1954},
  {quote: "The harder the conflict, the more glorious the triumph.",              source: "Thomas Paine",     citation: "The American Crisis",    year: 1776},
  {quote: "The more we do, the more we can do.",                                  source: "William Hazlitt",  citation: "The Spirit of the Age",  year: 1825}
];

// Chooses a random quote from an array of quotes
// without a quote appearing twice in a row
function getRandomQuote(array) {
  var randomNumber = Math.floor(Math.random() * array.length);
  if (currentNumber === randomNumber) {
    getRandomQuote(array);
  } else {
    currentNumber = randomNumber;
  }
  return array[currentNumber];
}

// Changes the background color to a random color from a
// list of colors without one appearing twice in a row
function randomBackgroundColor(colorList) {
  var randomNumber = Math.floor(Math.random() * colorList.length);
  if (currentNumber2 === randomNumber) {
    randomBackgroundColor(colorList);
  } else {
    currentNumber2 = randomNumber;
    color = colorList[randomNumber];
    document.body.style.backgroundColor = color;
    document.getElementById('loadQuote').style.backgroundColor = color;
  }
}

// Creates a message containing the quote object and prints it
function printQuote() {
  randomQuote = getRandomQuote(quotes);
  var message = '<p class="quote">' + randomQuote.quote + '</p>';
  message += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation != null) {
    message += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year != null) {
    message += '<span class="year">' + randomQuote.year + '</span>';
  }
  message += '</p>'
  document.getElementById('quote-box').innerHTML = message;
  currentQuote = randomQuote;
  randomBackgroundColor(backgroundColors);

  // Calls the function again after 5 seconds
  clearTimeout(timeoutHandler);
  timeoutHandler = setTimeout(printQuote, 5000);
}

// Calls the "printQuote" function when the
// user presses the "Show another quote" button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

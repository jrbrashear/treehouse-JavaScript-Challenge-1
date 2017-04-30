// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//create quotes array with specified objects
var quotes = [
  {quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
  source: "Ayn Rand"},
  {quote: "Don't go around saying the World owes you a livining.  The World owes you nothing.  It was here first.",
  source: "Mark Twain"},
  {quote: "By trying we can easily learn to endure adversity.  Another man's, I mean.",
  source: "Mark Twain", citation: "Mark Twain Calendar", year: "1917" },
  {quote: "In Paris they just simply opened their eyes and stared when we spoke to them in French! We never did succeed in making those idiots understand their own language.",
  source: "Mark Twain", citation: "The Innocents Abroad", }
]

function getRandomQuote()
 {
   var randomQuote = quotes[Math.floor(Math.random()* quotes.length)];
   return randomQuote;
 };

 function printQuote() {
   var printQuote = getRandomQuote();
   printQuote += '<p class="quote">' + printQuote.quote + ' </p>;'
   return printQuote;

 };

 


console.log(printQuote());

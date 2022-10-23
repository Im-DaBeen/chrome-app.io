const quotes = [

{
    quote: "hi",
    author: "me",
},
{
    quote: "yo",
    auther: "what's up?"
}
];

const quote = document.querySelector("#quote span:first-child");
const auther = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
auther.innerText = todaysQuote.auther;
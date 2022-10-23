const quotes = [

{
    quote: "Just believe in yourself. Even if you don’t, pretend that you do and, at some point, you will.",
    author: "me VENUS WILLIAMS",
},
{
    quote: "If you think you can do a thing or think you can’t do a thing, you’re right.",
    auther: "HENRY FORD"
},
{
    quote:"Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will spend its whole life believing that it is stupid.",
    auther:"Albert Einstein",
},
{
    quote:"Efforts and courage are not enough without purpose and direction.",
    auther:"JOHN F. KENNEDY",
},
{
    quote:"I don’t measure a man’s success by how high he climbs, but how high he bounces when he hits the bottom.",
    auther:"GENERAL GEORGE S. PATTON",
},
{
    quote:"Never give up, for that is just the place and time that the tide will turn.",
    auther:"HARRIET BEECHER STOWE",
},
{
    quote:"The secret of getting ahead is getting started.",
    auther:"MARK TWAIN",
},
{
    quote:"If we wait for the moment when absolutely everything is ready we shall never begin.",
    auther:"Ivan Turgenev",
},
{
    quote:"By failing to prepare you are preparing to fail.",
    auther:"Benjamin Franklin",
},
{
    quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    auther:"Thomas A. Edison",
},
];

const quote = document.querySelector("#quote span:first-child");
const auther = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
auther.innerText = todaysQuote.auther;
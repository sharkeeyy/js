let btn = document.querySelector("#new_quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
    {quote: 'Quote1', person: 'Person1'},
    {quote: 'Quote2', person: 'Person2'},
    {quote: 'Quote3', person: 'Person3'},
    {quote: 'Quote4', person: 'Person4'},
    {quote: 'Quote5', person: 'Person5'},
];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
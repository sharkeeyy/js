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

btn.addEventListener('click', getQuote);

function getQuote() {
    let request = new XMLHttpRequest();
    request.open('GET', "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote");
    request.responseType = 'text';
    
    request.onload = function() {
        console.log(request.response);
    };

    request.send();
}
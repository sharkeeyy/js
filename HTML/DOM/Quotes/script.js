let btn = document.querySelector("#new_quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

btn.addEventListener('click', getQuote);

async function getQuote() {

    let url = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=xml&lang=en';
    let response = await fetch(url);

    let data = await response.json(); 

    console.log(data);

    quote.innerText = data.text;

}
// fetch('https://www.cbr-xml-daily.ru/daily_json.js')
//     .then(function(data) {
//         return data.json();
//     })
//     .then(function(data) {
//         console.log(data)
//     })
//     .catch(function(data) {
//         console.log('Failed!')
//     });

async function getCurrencies() {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();

    const usdRate = data.Valute.USD.Value.toFixed(2);
    const eurRate = data.Valute.EUR.Value.toFixed(2);

    const usdItem = document.querySelector('#usd');
    const eurItem = document.querySelector('#eur');

    usdItem.innerText = usdRate;
    eurItem.innerText = eurRate;
}

getCurrencies();


const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');
const btnReset = document.querySelector('#reset');
const labelCounter = document.querySelector('#counter');


let counter = 0;
let timer;

btnStart.addEventListener('click', function(){
    timer = setInterval(() => {
        counter += 0.01;
        labelCounter.innerText = counter.toFixed(2);
    }, 10);
});

btnStop.addEventListener('click', function(){
    clearTimeout(timer);
});

btnReset.addEventListener('click', function(){
    counter = 0;
    labelCounter.innerText = counter; 
});
// start.onClick = function() {
//     // timer = setInterval(() => {
//     //     counter += 0.01;
//     //     labelCounter.innerText = counter.toFixed(2);
//     // }, 10);
//     labelCounter.innerText = 'Clicked!';
// };

// btnStop.onClick = function() {
//     clearTimeout(timer);
// }

// btnReset.onClick = function() {
//     counter = 0;
//     labelCounter.innerText = counter;
// }
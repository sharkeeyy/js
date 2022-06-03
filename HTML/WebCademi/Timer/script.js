const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');
const btnReset = document.querySelector('#reset');
const labelCounter = document.querySelector('#counter');


let counter = 0;
let timer;

btnStart.onclick = function(){;
    timer = setInterval(() => {
        counter += 0.01;
        labelCounter.innerText = counter.toFixed(2);
    }, 10);
}

btnStop.onclick = function() {
    clearTimeout(timer);
}

btnReset.onclick = function() {
    counter = 0;
    labelCounter.innerText = '0.00';
}
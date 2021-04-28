const coin = document.querySelector('#coin');
const button = document.querySelector('#flip');

function deferFn(callback, ms) {
    setTimeout(callback, ms);
}

function processResult(result) {
    alert(result);
}

function flipCoin() {
    const result = Math.random() < 0.5 ? 'head' : 'tail';
    deferFn(function () {
        coin.setAttribute('class', 'animate-' + result);
        deferFn(processResult.bind(null, result), 2900);
    }, 100);
}

button.addEventListener('click', flipCoin);



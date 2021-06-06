import {coin,button} from '../../elements/htmlElements.js'
import {changeColorRed,changeDisplayNone} from '../buttonFunctions/htmlFunctions.js'
import {processResult} from '../userFunctions/resultProcess.js'
function flipCoin() {
    changeDisplayNone(button);
    changeColorRed(button);
    coin.setAttribute('class', ''); // removes previous coin flip
    const result = Math.random() < 0.5 ? 'head' : 'tail'; // 50/50 random result
    deferFn(function () {
        coin.setAttribute('class', 'animate-' + result);
        deferFn(processResult.bind(null, result), 2900); // when it will end and show result
    }, 100); // when it will start
}

function deferFn(callback, ms) {
    setTimeout(callback, ms);
}

export {flipCoin}
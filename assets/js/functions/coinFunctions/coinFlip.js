import {coin,button} from '../../elements/htmlElements.js'
import {changeColorRed,changeDisplayNone} from '../buttonFunctions/htmlFunctions.js'
import {processResult} from '../userFunctions/resultProcess.js'
function flipCoin() {
    changeDisplayNone(button);
    changeColorRed(button);
    coin.setAttribute('class', '');
    const result = Math.random() < 0.5 ? 'head' : 'tail';
    deferFn(function () {
        coin.setAttribute('class', 'animate-' + result);
        deferFn(processResult.bind(null, result), 2900);
    }, 100);
}

function deferFn(callback, ms) {
    setTimeout(callback, ms);
}

export {flipCoin}
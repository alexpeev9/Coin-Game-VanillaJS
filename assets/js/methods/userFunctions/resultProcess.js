import {resultText} from '../../elements/htmlElements.js'
import {increasePlayerWins,increasePlayerLoses} from '../userFunctions/increaseValues.js'
import {checkiffinished} from '../userFunctions/countChecker.js'
import {revertToNormal} from '../buttonFunctions/revertToStart.js'
import {player1,player2} from '../../elements/variables.js'

function processResult(result) {
    if(result == player1.chosenSide.toLowerCase())
    {
        increasePlayerWins(player1);
    }
    else
    {
        increasePlayerLoses(player1)
    }

    if(result == player2.chosenSide.toLowerCase())
    {
        increasePlayerWins(player2);
    }
    else
    {
        increasePlayerLoses(player2);
    }
    resultText.innerText = result.toUpperCase();
    revertToNormal();
    console.log(player1);
    console.log(player2);
    checkiffinished();
}
export {processResult}
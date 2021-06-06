import {resultText,player1scoreW,player1scoreL,player2scoreW,player2scoreL,finalMessage,button,userButtons1,userButtons2} from '../../elements/htmlElements.js'
import {increasePlayerWins,increasePlayerLoses} from '../userFunctions/increaseValues.js'
import {changeColorYellow,changePointEventAuto,changeDisplayNone,htmlElementToArray} from '../buttonFunctions/htmlFunctions.js'
import {player1,player2,count,countModify} from '../../elements/variables.js'
import {nullWin,nullLose,clearScore,nullSide} from './nullateValues.js'

function processResult(result) {
    if(result == player1.chosenSide.toLowerCase())
    {
        increasePlayerWins(player1);
        player1scoreW.innerHTML = player1.wins;
    }
    else
    {
        increasePlayerLoses(player1)
        player1scoreL.innerHTML = player1.loses;
    }

    if(result == player2.chosenSide.toLowerCase())
    {
        increasePlayerWins(player2);
        player2scoreW.innerHTML = player2.wins;
    }
    else
    {
        increasePlayerLoses(player2);
        player2scoreL.innerHTML = player2.loses;
    }
    resultText.innerText = result.toUpperCase();
    console.log(player1);
    console.log(player2);
    revertToNormal();
    checkiffinished();
}

function revertToNormal(){
    
    changeDisplayNone(button);
    changePointEventAuto(button);
    changeColorYellow(button);

    htmlElementToArray(userButtons1).forEach(element => { 
        changeColorYellow(element);
        changePointEventAuto(element);
    });

    htmlElementToArray(userButtons2).forEach(element => { 
        changeColorYellow(element); 
        changePointEventAuto(element);
    });
    
    nullSide(player1);
    nullSide(player2)
}

function checkiffinished()
{
    if(count==10)
    {
        let p1wins = player1.wins;
        let p2wins = player2.wins;
        if(p1wins > p2wins)
        {
            finalMessage.innerHTML = `The winner is ${player1.name} with ${player1.wins} wins`;
        }
        else if(p2wins > p1wins)
        {
            finalMessage.innerHTML = `The winner is ${player2.name} with ${player2.wins} wins`;
        }
        else
        {
            finalMessage.innerHTML = `No winners! Draw`;
        }
        countModify(0);
        clearScore();
        nullWin(player1);
        nullLose(player1);
        nullWin(player2);
        nullLose(player2);
    }
}

export {processResult}
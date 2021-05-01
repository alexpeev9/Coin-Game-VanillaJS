import {player1,player2,count,countModify} from '../../elements/variables.js'
import {nullWin,nullLose} from './nullateValues.js'

function checkiffinished()
{
    if(count==10)
    {
        let p1wins = player1.wins;
        let p2wins = player2.wins;
        if(p1wins > p2wins)
        {
            alert(`The winner is ${player1.name}`)
        }
        else if(p2wins > p1wins)
        {
            alert(`The winner is ${player2.name}`)
        }
        else
        {
            alert(`Draw!`);
        }
        countModify(0);
        nullWin(player1);
        nullLose(player1);
        nullWin(player2);
        nullLose(player2);
    }
}
export {checkiffinished};
import {player1scoreW,player1scoreL,player2scoreW,player2scoreL} from '../../elements/htmlElements.js'
function nullSide(player)
{
    player.chosenSide = null;
}
function nullWin(player)
{
    player.wins = 0;
}
function nullLose(player)
{
    player.loses = 0;
}
function clearScore()
{
    player1scoreW.innerHTML = 0;
    player1scoreL.innerHTML = 0;
    player2scoreW.innerHTML = 0;
    player2scoreL.innerHTML = 0;
}
export {nullSide,nullWin,nullLose,clearScore}
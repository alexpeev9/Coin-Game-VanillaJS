import {button,buttonHead1,buttonTail1,buttonHead2,buttonTail2} from './elements/htmlElements.js'
import {player1,player2} from './elements/variables.js'
import {hideButtons} from './functions/buttonFunctions/hideButtons.js'
import {flipCoin} from './functions/coinFunctions/coinFlip.js'
button.addEventListener('click', flipCoin);
buttonHead1.addEventListener('click',()=>{hideButtons(player1,buttonHead1)});
buttonTail1.addEventListener('click',()=>{hideButtons(player1,buttonTail1)});
buttonHead2.addEventListener('click',()=>{hideButtons(player2,buttonHead2)});
buttonTail2.addEventListener('click',()=>{hideButtons(player2,buttonTail2)});
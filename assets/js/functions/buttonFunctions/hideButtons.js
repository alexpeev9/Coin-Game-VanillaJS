import {changeColorRed,changePointEventNone,changeDisplayBlock,htmlElementToArray} from '../buttonFunctions/htmlFunctions.js'
import {button} from '../../elements/htmlElements.js'
import {count,countModify} from '../../elements/variables.js'
function hideButtons(player,input){
    player.chosenSide = input.textContent;
    // input.id - id
    htmlElementToArray(document.getElementsByClassName(input.className)).forEach(element => { 
        changeColorRed(element);
        changePointEventNone(element);
    });
    countModify(count + 1);
    console.log(count);
    if(count%2==0)
    {
        changeDisplayBlock(button);
    }
}
export {hideButtons}
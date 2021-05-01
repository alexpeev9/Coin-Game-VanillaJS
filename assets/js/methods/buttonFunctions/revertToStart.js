import {changeColorYellow,changePointEventAuto,changeDisplayNone,htmlElementToArray} from './htmlFunctions.js'
import {button,userButtons1,userButtons2} from '../../elements/htmlElements.js'
import {player1,player2} from '../../elements/variables.js'
import {nullSide} from '../userFunctions/nullateValues.js'
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
export {revertToNormal};
// Colors
function changeColorYellow(element){
    element.style.backgroundColor = "yellow";
}

function changeColorRed(element){
    element.style.backgroundColor = "red";
}

// PointEvent
function changePointEventNone(element){
    element.style.pointerEvents = "none";
}

function changePointEventAuto(element){
    element.style.pointerEvents = "auto";
}

// Display
function changeDisplayNone(element){
    element.style.display = "none";
}

function changeDisplayBlock(element){
    element.style.display = "block";
}

// Others
function htmlElementToArray(element){
    return Array.from(element);
}

export {changeColorYellow,changeColorRed,changePointEventNone,changePointEventAuto,changeDisplayNone,changeDisplayBlock,htmlElementToArray}
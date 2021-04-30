// Здравей!
const coin = document.querySelector('#coin');
const button = document.getElementsByClassName('flipButton')[0];
const resultText = document.getElementById('status');
const buttonHead1 = document.getElementById('user1Head');
const buttonTail1 = document.getElementById('user1Tail');
const buttonHead2 = document.getElementById('user2Head');
const buttonTail2 = document.getElementById('user2Tail');

let count = 0;
let player1 = {name:'User 1', wins: 0, loses: 0, chosenSide: null};
let player2 = {name:'User 2', wins: 0, loses: 0, chosenSide: null};
let players = [player1,player2];

function deferFn(callback, ms) {
    setTimeout(callback, ms);
}

function processResult(result) {
    if(result == player1.chosenSide.toLowerCase())
    {
        player1.wins += 1;
    }
    else
    {
        player1.loses += 1;
    }

    if(result == player2.chosenSide.toLowerCase())
    {
        player2.wins += 1;
    }
    else
    {
        player2.loses += 1;
    }
    resultText.innerText = result.toUpperCase();
    console.log(player1);
    console.log(player2);
    revertToNormal();
    checkiffinished();
}

function flipCoin() {
    button.style.pointerEvents = "none";
    button.style.backgroundColor = "red";
    coin.setAttribute('class', '');
    const result = Math.random() < 0.5 ? 'head' : 'tail';
    deferFn(function () {
        coin.setAttribute('class', 'animate-' + result);
        deferFn(processResult.bind(null, result), 2900);
    }, 100);
}

button.addEventListener('click', flipCoin);

buttonHead1.addEventListener('click',buttonHead1Click);
function buttonHead1Click(){
    hideButtons(player1,buttonHead1);
}

buttonTail1.addEventListener('click',buttonTail1Click);
function buttonTail1Click()
{
    hideButtons(player1,buttonTail1);
}
buttonHead2.addEventListener('click',buttonHead2Click);
function buttonHead2Click(){
    hideButtons(player2, buttonHead2);
}

buttonTail2.addEventListener('click',buttonTail2Click);
function buttonTail2Click(){
    hideButtons(player2, buttonTail2);
}

function hideButtons(player,input){
    player.chosenSide = input.textContent;
    // input.textContent - kakvo pishe na button
    // input.id - id
    let buttonsArray = Array.from(document.getElementsByClassName(input.className));
    buttonsArray.forEach(element => { 
        element.style.backgroundColor = "red" ; 
        element.style.pointerEvents = "none";
    });
    count += 1;
    console.log(count);
    if(count%2==0)
    {
        button.style.display = "block";
    }
}

function revertToNormal(){
    let buttonsArray1 = Array.from(document.getElementsByClassName("userButton1"));
    let buttonsArray2 = Array.from(document.getElementsByClassName("userButton2"));
    button.style.display = "none";
    button.style.pointerEvents = "auto";
    button.style.backgroundColor = "yellow";

    buttonsArray1.forEach(element => { 
        element.style.backgroundColor = "yellow" ; 
        element.style.pointerEvents = "auto";
    });
    buttonsArray2.forEach(element => { 
        element.style.backgroundColor = "yellow" ; 
        element.style.pointerEvents = "auto";
    });
    player1.chosenSide = null;
    player2.chosenSide = null;
}
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
        count = 0;
        player1.wins = 0;
        player1.loses = 0;
        player2.wins = 0;
        player2.loses = 0;
    }
}
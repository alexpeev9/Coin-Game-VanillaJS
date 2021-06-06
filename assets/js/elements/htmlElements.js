const coin = document.querySelector('#coin');
const resultText = document.getElementById('status');

// Buttons
const button = document.getElementsByClassName('flipButton')[0];
const buttonHead1 = document.getElementById('user1Head');
const buttonTail1 = document.getElementById('user1Tail');
const buttonHead2 = document.getElementById('user2Head');
const buttonTail2 = document.getElementById('user2Tail');
// Collection of Buttons
const userButtons1 = document.getElementsByClassName("userButton1");
const userButtons2 = document.getElementsByClassName("userButton2")

// HTML fields
const finalMessage = document.getElementById('winnerMessage');
const player1scoreW = document.getElementById('score1wins');
const player1scoreL = document.getElementById('score1loses');
const player2scoreW = document.getElementById('score2wins');
const player2scoreL = document.getElementById('score2loses');
export {coin,button,resultText,buttonHead1,buttonTail1,buttonHead2,buttonTail2,userButtons1,userButtons2,finalMessage,player1scoreW,player1scoreL,player2scoreW,player2scoreL}
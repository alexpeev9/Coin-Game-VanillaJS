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
export {coin,button,resultText,buttonHead1,buttonTail1,buttonHead2,buttonTail2,userButtons1,userButtons2}
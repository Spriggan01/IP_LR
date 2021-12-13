function promptName() {
    let value = prompt("Enter name");
    while (value == ""){
        value = prompt("Don't you understand ?! Came out and went in fine!");
    }
    while (value == " "){
        value = prompt("Don't you understand ?! Came out and went in fine!");
    }
    while (value == "  "){
        value = prompt("Don't you understand ?! Came out and went in fine!");
    }
    if(value == null){
        value = prompt("Are you kidding?")
    }
    if (value == null){
        value = window.location.replace("privateCraps.html")
    }
    document.getElementById("playerName").innerHTML = value;
};

document.addEventListener("DOMContentLoaded", promptName);

let playerHp = parseInt(document.getElementById('player-hp').innerText);
let computerHp = parseInt(document.getElementById('computer-hp').innerText);
let playerChips = parseInt(document.getElementById('player-chips').innerText);
let computerChips= parseInt(document.getElementById('computer-chips').innerText);

let plChips = 25;
let comChips = 25;
let plHp = 1;
let comHp = 1;

window.addEventListener( 'DOMContentLoaded', function () {
	
const buttonRoolDice = document.querySelector( '.dice-roll' );

function rollDice () {

plChips = 25;
comChips = 25;
plHp = 1;
comHp = 1;

playerChips = playerChips - comChips;
computerChips = computerChips - plChips;

        const diceSide1 = document.getElementById( 'dice-side-1' );
        const diceSide2 = document.getElementById( 'dice-side-2' );
        const diceSide3 = document.getElementById( 'dice-side-3' );
        const diceSide4 = document.getElementById( 'dice-side-4' );
        const status = document.getElementById( 'status' );
diceSide1.classList.add('ballShake');
diceSide1.addEventListener( "animationend",  function() {
diceSide1.classList.remove("ballShake");
});
diceSide2.classList.add('ballShake');
diceSide2.addEventListener( "animationend",  function() {
diceSide2.classList.remove("ballShake");
});
diceSide3.classList.add('ballShake');
diceSide3.addEventListener( "animationend",  function() {
diceSide3.classList.remove("ballShake");
});
diceSide4.classList.add('ballShake');
diceSide4.addEventListener( "animationend",  function() {
diceSide4.classList.remove("ballShake");
});
        const side1 = Math.floor( Math.random() * 6 ) + 1;
        const side2 = Math.floor( Math.random() * 6 ) + 1;
        const side3 = Math.floor( Math.random() * 6 ) + 1;
        const side4 = Math.floor( Math.random() * 6 ) + 1;
        const diceTotal1 = side1 + side2;
        const diceTotal2 = side3 + side4;

        diceSide1.innerHTML = side1;
        diceSide2.innerHTML = side2;
        diceSide3.innerHTML = side3;
        diceSide4.innerHTML = side4;

        status.innerHTML = "You got the same number as your opponent. Then the result is a draw!";

        if ( diceTotal1 > diceTotal2 ) {
            status.innerHTML = "Yup! You win! With " + diceTotal1 + " points.";
	playerChips = playerChips + comChips;
	}
	else if ( diceTotal1 < diceTotal2 ) {
            status.innerHTML = "You rolled " + diceTotal1 + ". And your opponent rolled " + diceTotal2 + ". So you lose. :(";   
	computerChips = computerChips + plChips; 
	}
document.getElementById('computer-chips').innerText = computerChips;
document.getElementById('player-chips').innerText = playerChips;
if (playerChips < 25){
playerHp = playerHp - comHp;
playerChips = 125;}
else if (computerChips < 25){
computerHp = computerHp - plHp;
computerChips = 125;}

document.getElementById("player-hp").innerHTML = playerHp;
document.getElementById("computer-hp").innerHTML = computerHp;

if (playerHp < 1){
alert("Sorry, but you losse. ");
window.location.replace("privateCraps.html")	
}
else if (computerHp < 1){
alert("Congratulations! You win!");
window.location.replace("privateCraps.html")
}
    }

    buttonRoolDice.addEventListener( 'click', rollDice, false );

}, false);

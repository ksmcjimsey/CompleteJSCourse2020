/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

/************************
Lecture 48 - DOM
************************/

var scores, roundScore, activePlayer, gamePlaying;

// Math object is built in JS
/*
dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);
*/

// querySelectory selects the first element in the DOM it fines.
// Uses css selection.  This line sets the value of the object.
// Setter
//document.querySelector('#current-' + activePlayer).textContent = dice;

// Set the value to html - setter
//document.querySelector('#current-' + activePlayer).innerHTML = "<em>" + dice + "</em>";

// Read the value from an object. Getter
//var x = document.querySelector("#score-0").textContent;
//console.log(x);

// Functions
/*
function btn() {
    // Do something on button click
}
*/

// Event handlers
//
// Button roll - event type and function name call
// The call back function does not have () so it does not run
// right away.
//document.querySelector(".btn-roll").addEventListener("click", btn);

// Initialized the game
init();


// This is for button roll event listener.
// If we define the function right here then it would
// be an "anonoymous function.
document.querySelector(".btn-roll").addEventListener("click", function() {

    if (gamePlaying) {

        // 1. Need a random number
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result.  Show the dice and set the correct image
        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "dice-" + dice + ".png";

        // 3. Update the round score if the rolled number is NOT a 1
        if (dice === 1) {

            // Swap players
            nextPlayer();

        } else {
            // Add value to current score for current player
            roundScore += parseInt(dice);
            document.getElementById('current-' + activePlayer ).textContent = roundScore;
        }   // Dice 1 or other

    }   // is game state true?

});     // End of querySelector for btn-roll



// Hold event listener
document.querySelector(".btn-hold").addEventListener("click", function() {

    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score.
        scores[activePlayer] += roundScore;
        //console.log(scores[activePlayer]);

        // Show new score
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

        // If score is above 100 declare winner
        if (scores[activePlayer] >= 100) {

            // Set state variable to false as game is no longer playing
            gamePlaying = false;

            document.getElementById("name-" + activePlayer).textContent = "WINNER!";

            // Hide dice, role button, and hold buttons
            document.querySelector(".dice").style.display = "none";

            // Apply the winner class
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");

        } else {
            // Swap players
            nextPlayer();
        }
    }   // game state check


});     // End of querySelector for btn-hold


// New Game button event listener
// no anonoymous function just called init.
document.querySelector(".btn-new").addEventListener("click", init);


// Functions
// Next player function
function nextPlayer() {

    // Update UI for next player
    //
    // Clear round value - reset current to zero.
    document.getElementById('current-' + activePlayer ).textContent = '0';

    // Reset the round score to zero.
    roundScore = 0;

    // Swap turns
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    // Change display for next players turn.
//    document.querySelector(".player-0-panel").classList.remove("active");
//    document.querySelector(".player-1-panel").classList.add("active");
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector(".dice").style.display = "none";
}


// Initialize a new game
function init() {

    gamePlaying = true;
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    // Change the CSS of an element. . for class and # for ID.
    document.querySelector(".dice").style.display = "none";

    // Set the scores to zero on start.  Get element by ID is faster but only works for IDs
    // Don't need "#" in front of ID when using getElementById
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Change back the player name from winner to name
    document.getElementById("name-0").textContent = "PLAYER 1!";
    document.getElementById("name-1").textContent = "PLAYER 2!";

    // Remove the Winner class - OK to remove even if the class is not there
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    // Set the GUI for whos turn it is to player 1
    document.querySelector(".player-0-panel").classList.remove("active");   // So we don't have more then one added
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");

}   // end of "init" function





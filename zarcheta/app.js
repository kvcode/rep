/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that hi s ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var scores, roundScore, activePlayer, dice1, dice2, gamePlaying;
var inputPoints = document.querySelector('.inputPoints');

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying) {
        //1. Random nr
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        //2. Display the result
        var diceDOM1 = document.querySelector('#dice-1');
        diceDOM1.style.display = 'block';
        diceDOM1.src = `dice-${dice1}.png`;

        var diceDOM2 = document.querySelector('#dice-2');
        diceDOM2.style.display = 'block';
        diceDOM2.src = `dice-${dice2}.png`;
        //3. Update the round score IF the rolled nr was not 1
        if (dice1 > 1 && dice2 > 1) {
            // Add score to current
            roundScore += (dice1 + dice2);
            document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
            document.querySelector('#dice-1').style.opacity = 1;
            document.querySelector('#dice-2').style.opacity = 1;
        } else {
            //Next player
            nextPlayer();
            document.querySelector('#dice-1').style.opacity = 0.7;
            document.querySelector('#dice-2').style.opacity = 0.7;
        }
    }
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying) {
        // add Current score to Player's Global score
        scores[activePlayer] += roundScore;
        // Update the UI
        document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
        // check if the player won the game
        if (scores[activePlayer] >= inputPoints.value) {
            document.querySelector(`#name-${activePlayer}`).textContent = 'Winner';
            document.querySelector('#dice-1').style.display = "none";
            document.querySelector('#dice-2').style.display = "none";
            document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove('winner');
            gamePlaying = false;
        } else {
        // next player
        nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');


}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.querySelector('#dice-1').style.display = "";
    document.querySelector('#dice-2').style.display = "";

    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector(`.player-0-panel`).classList.remove('winner');
    document.querySelector(`.player-1-panel`).classList.remove('winner');
    document.querySelector(`.player-0-panel`).classList.remove('active');
    document.querySelector(`.player-1-panel`).classList.remove('active');
    document.querySelector(`.player-0-panel`).classList.add('active');
    inputPoints.style.display = "block";
    console.log(inputPoints.value);
}



document.querySelector('.butn-pts').addEventListener('click', function() {
    inputPoints.style.display = "none";
})
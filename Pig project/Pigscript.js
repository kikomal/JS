'use strict';
const player0E1 = document.querySelector('.player--0');
const player1E1 = document.querySelector('.player--1');
const score0E1 = document.querySelector('#score--0');
const score1E1 = document.getElementById('score--1');
const current0E1 = document.getElementById('current--0');
const current1E1 = document.getElementById('current--1');
const diceE1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0E1.textContent = 0;
  score1E1.textContent = 0;
  current0E1.textContent = 0;
  current1E1.textContent = 0;

  diceE1.classList.add('hidden');
  player0E1.classList.add('player--active');
  player1E1.classList.remove('player--active');
  player0E1.classList.remove('player--winner');
  player1E1.classList.remove('player--winner');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //toggle will chcek if player--active class is with player0E1 if not then add that class and if already there then will remove that class
  player0E1.classList.toggle('player--active');
  player1E1.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //Generating a random number from dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //Display the dice
    diceE1.classList.remove('hidden');
    diceE1.src = `dice-${dice}.png`;
    //console.log(dice);

    //check if dice value is 1:
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
    //if yes, switch the player
    else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //add currentscore to Score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //chk if socre>=100: declare winner and finish the game
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceE1.classList.add('hidden');

      playing = false;
    } else {
      //else: switch the player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

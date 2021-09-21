"use strict";
const score0E1 = document.querySelector("#score--0");
const score1E1 = document.getElementById("#score--1");
const diceE1 = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//starting conditions
score0E1.textcontent(0);
score1E1.textcontent(0);
diceE1.classList.add("hidden");
let currentScore = 0; //we are decalring this variable here and not in function because whenever we call function the value will be added as 0 which we do not want

btnRoll.addEventListener("click", function () {
  //Rolling a dice
  const dice = Math.trunc(Math.random() * 6) + 1;

  //displaying the dice value
  diceE1.classList.remove("hidden");
  diceE1.src = `dice--${dice}.png`;

  //chcek if dice value is 1: if yes switch the player
  if (dice !== 1) {
    //add the value of score in total
    currentScore += dice;
  } else {
    //switch the player
  }
});

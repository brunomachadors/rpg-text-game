const { input } = require('@inquirer/prompts');
const GAME_TEXT = require('../gameText/gameTex');
const { gameOver, playAgain } = require('../gameText/gameStatus');

let count = 3;

function riddle() {
  console.log(GAME_TEXT.textSpacing);
  console.log(GAME_TEXT.riddle.riddleTitle);
  console.log(GAME_TEXT.textSpacing);
  input({
    message: GAME_TEXT.riddle.riddle,
  }).then(function (answer) {
    if (GAME_TEXT.riddle.riddleAnswer.includes(answer.toLowerCase())) {
      console.log(GAME_TEXT.riddle.solved);
      playAgain();
    } else {
      count -= 1;
      console.log(GAME_TEXT.riddle.riddleCount(count));
      if (count) {
        console.log(GAME_TEXT.riddle.riddleFailedAnswer);
        riddle();
      } else {
        console.log(GAME_TEXT.riddle.riddleCountZero);
        gameOver();
      }
    }
  });

function riddle() {
    console.log(GAME_TEXT.textSpacing);
    console.log(GAME_TEXT.riddle.riddleTitle)
    console.log(GAME_TEXT.textSpacing)
    input({
        message: GAME_TEXT.riddle.riddle
    }).then(function (answer) {
        if (answer.toLowerCase() === GAME_TEXT.riddle.riddleAnswer) {
            console.log("You solved the riddle!")
        } else {
            count -= 1;
            console.log(GAME_TEXT.riddle.riddleCount(count))
            if (count) {
                console.log(GAME_TEXT.riddle.riddleFailedAnswer)
                riddle()
            } else {
                console.log(GAME_TEXT.riddle.riddleCountZero)
                this.mainMenu();
            }
        }
    })
    
    console.log()



}

module.exports = { riddle }
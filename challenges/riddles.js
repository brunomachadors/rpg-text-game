const { input } = require('@inquirer/prompts');
const GAME_TEXT = require('../gameText/gameText');
const { gameOver, playAgain } = require('../gameText/gameStatus');
const { combat } = require('./combat');
const MONSTERS = require('./monsters');

let count = 3;

function setRiddle(mainMenu, character, startGame) {
  this.mainMenu = mainMenu;
  this.character = character;
  this.startGame = startGame;
}

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
        combat(MONSTERS.skeleton.name, 1);
      }
    }
  });
}
module.exports = { riddle, setRiddle };

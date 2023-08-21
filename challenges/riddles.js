const { input } = require('@inquirer/prompts');
const GAME_TEXT = require('../gameText/gameTex');

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
}
module.exports = { riddle };

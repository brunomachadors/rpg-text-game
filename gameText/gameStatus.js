const { rawlist } = require('@inquirer/prompts');
const GAME_TEXT = require('./gameTex');

function gameOver() {
  console.log(GAME_TEXT.textSpacing);
  console.log();
  console.log();
  console.log();
  console.log(GAME_TEXT.combat.gameOver);
  console.log();
  console.log();
  console.log();
  console.log(GAME_TEXT.textSpacing);
  rawlist({
    message: 'Do you wanna try again?',
    choices: [
      {
        name: 'Yes',
        value: 'yes',
      },
      {
        name: 'No',
        value: 'no',
      },
    ],
  }).then(function (option) {
    switch (option) {
      case 'yes':
        console.clear();
        this.mainMenu();
        break;
      case 'no':
        break;
      default:
        console.log('That is not a valid option');
    }
  });
}

module.exports = { gameOver };

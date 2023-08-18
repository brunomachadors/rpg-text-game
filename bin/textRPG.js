const { rawlist, select } = require('@inquirer/prompts');
const { treasureDoor, dangerDoor } = require('../Doors/doors');
const GAME_TEXT = require('../gameText/gameTex');

function renderGame() {
  mainMenu();
}

function mainMenu() {
  console.log(GAME_TEXT.mainMenu);
  rawlist({
    message: GAME_TEXT.doors,
    choices: [
      { name: 'Left Door', value: 'treasureDoor' },
      { name: 'Right Door', value: 'dangerDoor' },
    ],
  }).then(function (option) {
    switch (option) {
      case 'treasureDoor':
        console.log(GAME_TEXT.textSpacing);
        console.log(GAME_TEXT.treasureDoor);
        console.log(GAME_TEXT.textSpacing);
        treasureDoor(mainMenu);

        break;
      case 'dangerDoor':
        console.log(GAME_TEXT.textSpacing);
        console.log(GAME_TEXT.dangerDoor);
        console.log(GAME_TEXT.textSpacing);
        dangerDoor(mainMenu);

        break;
      default:
        console.log(GAME_TEXT.textSpacing);
        console.log(GAME_TEXT.invalidDoor);
        console.log(GAME_TEXT.textSpacing);
    }
  });
}
module.exports = { renderGame };

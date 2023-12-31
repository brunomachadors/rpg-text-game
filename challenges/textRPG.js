const { rawlist } = require('@inquirer/prompts');
const { treasureDoor, dangerDoor, setDoor } = require('./doors');
const GAME_TEXT = require('../gameText/gameText');
const {
  characterSheet,
  characterStatusStyled,
} = require('../characters/character');
const { setCombat } = require('./combat');
const { setRiddle } = require('./riddles');

function renderGame() {
  console.clear();
  mainMenu();
}

function mainMenu() {
  console.log(GAME_TEXT.menu.mainMenu);
  selectCharacter();
}

function selectCharacter() {
  rawlist({
    message: GAME_TEXT.menu.selectCharacter,
    choices: [
      { name: GAME_TEXT.classes.fighter, value: 'fighter' },
      { name: GAME_TEXT.classes.rogue, value: 'rogue' },
      { name: GAME_TEXT.classes.wizard, value: 'wizard' },
      { name: GAME_TEXT.classes.cleric, value: 'cleric' },
    ],
  }).then(function (classType) {
    this.character = characterSheet(classType);
    console.clear();
    characterStatusStyled();
    startGame();
  });
}

function startGame() {
  setDoor(mainMenu, this.character, startGame);
  setCombat(mainMenu, this.character, startGame);
  setRiddle(mainMenu, this.character, startGame);

  rawlist({
    message: GAME_TEXT.doors,
    choices: [
      { name: 'Left Door', value: 'treasureDoor' },
      { name: 'Right Door', value: 'dangerDoor' },
    ],
  }).then(function (option) {
    console.clear();
    switch (option) {
      case 'treasureDoor':
        console.log(GAME_TEXT.textSpacing);
        console.log(GAME_TEXT.treasureDoor);
        console.log(GAME_TEXT.textSpacing);
        treasureDoor(this.character);

        break;
      case 'dangerDoor':
        console.log(GAME_TEXT.textSpacing);
        console.log(GAME_TEXT.dangerDoor);
        console.log(GAME_TEXT.textSpacing);
        dangerDoor(this.character);

        break;
      default:
        console.log(GAME_TEXT.textSpacing);
        console.log(GAME_TEXT.invalidDoor);
        console.log(GAME_TEXT.textSpacing);
    }
  });
}
module.exports = { renderGame };

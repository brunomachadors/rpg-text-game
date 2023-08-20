const { select } = require('@inquirer/prompts');
const GAME_TEXT = require('../gameText/gameTex');
const { combat } = require('./combat');

function setDoor(mainMenu, character, startGame) {
  this.mainMenu = mainMenu;
  this.character = character;
  this.startGame = startGame;
}

function treasureDoor(mainMenu, character) {
  this.character = character;
  select({
    message: 'Pick one:',
    choices: [
      {
        name: 'Open treasure chest',
        value: 'openChest',
      },
      {
        name: 'Investigate treasure chest',
        value: 'investigateChest',
      },
      {
        name: 'Leave the treasure chest untouched',
        value: 'leaveChest',
      },
    ],
  }).then(function (option) {
    switch (option) {
      case 'openChest':
        console.log(GAME_TEXT.textSpacing);
        console.log(GAME_TEXT.openChest);
        console.log(GAME_TEXT.textSpacing);
        mainMenu();

        break;
      case 'investigateChest':
        console.log(GAME_TEXT.textSpacing);
        console.log(GAME_TEXT.investigateChest);
        console.log(GAME_TEXT.textSpacing);
        mainMenu();

        break;
      case 'leaveChest':
        console.log(GAME_TEXT.textSpacing);
        console.log(GAME_TEXT.leave);
        console.log(GAME_TEXT.textSpacing);
        mainMenu();
        break;
      default:
        console.log('That is not a valid option');
    }
  });
}

function dangerDoor(character) {
  this.character = character;
  select({
    message: 'Pick one:',
    choices: [
      {
        name: 'Fight the skeleton!',
        value: 'atackSkeleton',
      },
      {
        name: 'Run away from the skeleton.',
        value: 'runFromSkeleton',
      },
      {
        name: 'Talk to the skeleton.',
        value: 'talkToTheSkeleton',
      },
    ],
  }).then(function (option) {
    switch (option) {
      case 'atackSkeleton':
        console.log(GAME_TEXT.textSpacing);
        console.log(GAME_TEXT.attack);
        console.log(GAME_TEXT.textSpacing);
        combat();
        break;
      case 'runFromSkeleton':
        console.log(GAME_TEXT.textSpacing);
        console.log(GAME_TEXT.leave);
        console.log(GAME_TEXT.textSpacing);
        this.mainMenu();

        break;
      case 'talkToTheSkeleton':
        console.log(GAME_TEXT.textSpacing);
        console.log(GAME_TEXT.riddle);
        console.log(GAME_TEXT.textSpacing);
        this.mainMenu();
        break;
      default:
        console.log('That is not a valid option');
    }
  });
}

module.exports = { treasureDoor, dangerDoor, setDoor };

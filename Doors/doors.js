const { select } = require('@inquirer/prompts');
const GAME_TEXT = require('../gameText/gameTex');

function treasureDoor(callback) {
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
        console.log(GAME_TEXT.gameUnderscore);
        console.log(GAME_TEXT.openChest);
        console.log(GAME_TEXT.gameUnderscore);

        break;
      case 'investigateChest':
        console.log(GAME_TEXT.gameUnderscore);
        console.log(GAME_TEXT.investigateChest);
        console.log(GAME_TEXT.gameUnderscore);

        break;
      case 'leaveChest':
        console.log(GAME_TEXT.gameUnderscore);
        console.log(GAME_TEXT.leave);
        console.log(GAME_TEXT.gameUnderscore);

        break;
      default:
        console.log('That is not a valid option');
    }

    callback();
  });
}

function dangerDoor(callback) {
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
        console.log(GAME_TEXT.gameUnderscore);
        console.log(GAME_TEXT.attack);
        console.log(GAME_TEXT.gameUnderscore);

        break;
      case 'runFromSkeleton':
        console.log(GAME_TEXT.gameUnderscore);
        console.log(GAME_TEXT.leave);
        console.log(GAME_TEXT.gameUnderscore);

        break;
      case 'talkToTheSkeleton':
        console.log(GAME_TEXT.gameUnderscore);
        console.log(GAME_TEXT.riddle);
        console.log(GAME_TEXT.gameUnderscore);
        break;
      default:
        console.log('That is not a valid option');
    }
  });
}

module.exports = { treasureDoor, dangerDoor };

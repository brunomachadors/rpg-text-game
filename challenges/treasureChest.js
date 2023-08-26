const { rawlist } = require('@inquirer/prompts');
const { disableTrap } = require('../characters/skills/disabelTrap');
const { trapAttackDescription, trapAttack } = require('../attacks/trapAttack');
const { gameOver, playAgain } = require('../gameText/gameStatus');
const { characterStatusShort } = require('../characters/character');
const TIMEOUTS = require('../helpers/timeouts');
const GAME_TEXT = require('../gameText/gameText');

function removeChestTrap(trap) {
  rawlist({
    message: 'Do you wanna disable the trap?',
    choices: [
      {
        name: 'Disable Trap',
        value: 'disable',
      },
      {
        name: 'Leave the Chest',
        value: 'leave',
      },
    ],
  }).then(function (option) {
    switch (option) {
      case 'disable':
        {
          if (!disableTrap(this.character, trap)) {
            trapAttackDescription(trap);
            const attack = trapAttack(trap).attack();
            console.log('Attack: ' + attack);
            if (attack >= this.character.ac) {
              console.log(GAME_TEXT.trap.attack.hit);
              const damage = trapAttack(trap).damage();
              this.character.hp -= damage;

              setTimeout(() => {
                characterStatusShort();
              }, TIMEOUTS.oneSecond);

              if (this.character.hp <= 0) {
                setTimeout(() => {
                  gameOver();
                }, TIMEOUTS.oneSecond);
              }
              console.log('Damage:' + damage);
            } else {
              console.log(GAME_TEXT.trap.attack.missed);
            }
          }

          setTimeout(() => {
            openChest();
          }, TIMEOUTS.twoSeconds);
        }
        break;

      case 'leave':
        {
        }
        break;
    }
  });
}

function openChest() {
  console.log(GAME_TEXT.treasure.found);

  setTimeout(() => {
    playAgain();
  }, TIMEOUTS.oneSecond);
}

module.exports = { removeChestTrap, openChest };

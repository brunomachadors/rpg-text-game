const { rawlist } = require('@inquirer/prompts');
const { disableTrap } = require('../characters/skills/disabelTrap');
const { trapAttackDescription, trapAttack } = require('../attacks/trapAttack');
const { gameOver, playAgain } = require('../gameText/gameStatus');
const { characterStatusShort } = require('../characters/character');
const TIMEOUTS = require('../timeouts');

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
              const damage = trapAttack(trap).damage();
              this.character.hp -= damage;

              if (this.character.hp <= 0) {
                setTimeout(() => {
                  gameOver();
                }, TIMEOUTS.oneSecond);
              }
              console.log('Damage:' + damage);

              setTimeout(() => {
                characterStatusShort();
              }, TIMEOUTS.oneSecond);
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
  console.log('YOU FOUND THE TREASURE');

  setTimeout(() => {
    playAgain();
  }, 5000);
}

module.exports = { removeChestTrap, openChest };

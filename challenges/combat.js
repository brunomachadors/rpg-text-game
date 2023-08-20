const { rawlist } = require('@inquirer/prompts');
const { d20 } = require('../rolls/rolls');
const GAME_TEXT = require('../gameText/gameTex');

function setCombat(mainMenu, character, startGame) {
  this.mainMenu = mainMenu;
  this.character = character;
  this.startGame = startGame;
}

function combat() {
  this.attacks = [];
  this.attackRoll;
  this.attackDamage;
  this.monsterHP = 12;
  this.monsterAC = 10;

  console.log('VIDA DO ESQUELETO: ' + monsterHP);

  this.character.attacks.forEach(function callback(attack, index) {
    attacks.push({ name: attack.name, value: index });
  });

  if (this.character.spells) {
    console.log('BOOM');
  }
  playerAttack();
}

function playerAttack() {
  rawlist({
    message: 'SELECT ATTACK',
    choices: attacks,
  }).then(function (attack) {
    this.attackRoll = this.character.attacks[attack].attack();
    this.attackDamage = this.character.attacks[attack].damage();
    console.log(GAME_TEXT.textSpacing);
    console.log('ATTACK ROLL: ' + this.attackRoll);
    console.log(`YOU'VE HITIED`);
    console.log('ATTACK DAMAGE: ' + this.attackDamage);
    monsterHP = monsterHP - this.attackDamage;
    console.log(GAME_TEXT.textSpacing);

    if (monsterHP > 0) {
      console.log('SKELETON HP:' + monsterHP);
      mosnterAttack();
    } else {
      console.log('SKELETON DIED');
    }
  });
}

function mosnterAttack() {
  console.log((this.mosnterAttack = d20() + 3));
  playerAttack();
}

module.exports = { combat, setCombat };

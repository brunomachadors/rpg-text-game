const { rawlist } = require('@inquirer/prompts');
const { d20 } = require('../rolls/rolls');

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
    console.log(this.character.attacks[attack].name);
    console.log('ATTACK ROLL: ' + this.attackRoll);
    console.log('ATTACK DAMAGE: ' + this.attackDamage);
    monsterHP = monsterHP - this.attackDamage;
    console.log('Você acertou o esqueleto');
    console.log('HP esqueleto:' + monsterHP);

    if (monsterHP > 0) {
      mosnterAttack();
    } else {
      console.log('Monstro morreu');
    }
  });
}

function mosnterAttack() {
  console.log((this.mosnterAttack = d20() + 3));
  playerAttack();
}

module.exports = { combat, setCombat };

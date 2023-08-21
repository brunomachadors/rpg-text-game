const { rawlist } = require('@inquirer/prompts');
const GAME_TEXT = require('../gameText/gameTex');
const MONSTERS = require('../challenges/monsters');
const { characterStatusShort } = require('../characters/character');

function setCombat(mainMenu, character, startGame) {
  this.mainMenu = mainMenu;
  this.character = character;
  this.startGame = startGame;
}

function combat(monster) {
  this.attacks = [];
  this.attackRoll;
  this.attackDamage;
  this.monster = MONSTERS[monster];

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
    console.log(GAME_TEXT.combat.attack);
    console.log('ATTACK ROLL: ' + this.attackRoll);
    attackHit(this.attackDamage);
    monsterStatus();
  });
}

function monsterAttack() {
  console.log(GAME_TEXT.combat.monsterAttack);
  let monsterAttack = this.monster.attacks[0].monsterAttack();
  console.log(
    'ATTACK:' + monsterAttack + ' VS ARMOR CLASS:' + this.character.ac
  );

  if (monsterAttack >= this.character.ac) {
    console.log(`YOU'RE HITTED`);
    let monsterDamage = this.monster.attacks[0].monsterDamage();
    console.log('DAMAGE:' + monsterDamage);
    this.character.hp -= monsterDamage;
    characterStatusShort();

    if (this.character.hp <= 0) {
      console.log(GAME_TEXT.combat.gameOver);
    } else {
      playerAttack();
    }
  } else {
    console.log(`MONSTER MISSSED`);
    console.log(GAME_TEXT.textSpacing);
    playerAttack();
  }
}

function attackHit(damage) {
  if (this.attackRoll >= this.monster.ac) {
    this.attackDamage = damage;
    console.log(GAME_TEXT.combat.damage);
    console.log(GAME_TEXT.combat.hit);
    console.log(GAME_TEXT.combat.attackDamage + this.attackDamage);
    this.monster.hp = this.monster.hp - this.attackDamage;
  } else {
    console.log(`YOU'VE MISSED`);
  }
}

function monsterStatus() {
  console.log(GAME_TEXT.combat.monster);
  if (this.monster.hp > 0) {
    console.log(`${this.monster.name} HP: ${this.monster.hp}`.toUpperCase());
    monsterAttack();
  } else {
    console.log(`${this.monster.name} died`.toUpperCase());
    console.log(`DROPPED: ${this.monster.loot}`);
  }
}

module.exports = { combat, setCombat };

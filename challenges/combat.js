const { rawlist } = require('@inquirer/prompts');
const GAME_TEXT = require('../gameText/gameText');
const MONSTERS = require('../challenges/monsters');
const {
  characterStatusStyled,
  characterStatusShort,
} = require('../characters/character');
const { gameOver, playAgain } = require('../gameText/gameStatus');
const TIMEOUTS = require('../timeouts');

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

  setTimeout(() => {
    characterStatusStyled();
  }, TIMEOUTS.oneSecond);

  setTimeout(() => {
    playerAttack();
  }, TIMEOUTS.oneSecond);
}

function playerAttack() {
  rawlist({
    message: 'SELECT ATTACK',
    choices: attacks,
  }).then(function (attack) {
    console.log(this.character.attacks[attack].description);
    this.attackRoll = this.character.attacks[attack].attack();
    this.attackDamage = this.character.attacks[attack].damage();
    console.log(GAME_TEXT.combat.attack);
    console.log('ATTACK ROLL: ' + this.attackRoll);

    setTimeout(() => {
      attackHit(this.attackDamage);
    }, TIMEOUTS.oneSecond);
    monsterStatus();
  });
}

function monsterAttack() {
  console.log(GAME_TEXT.combat.monsterAttack);
  let monsterAttack = this.monster.attacks[0].monsterAttack();
  console.log(
    'ATTACK:' + monsterAttack + ' VS ARMOR CLASS:' + this.character.ac
  );
  setTimeout(() => {
    monsterHit(monsterAttack);
  }, TIMEOUTS.oneSecond);
}

function monsterHit(monsterAttack) {
  if (monsterAttack >= this.character.ac) {
    console.log(`YOU'RE HITTED`);
    let monsterDamage = this.monster.attacks[0].monsterDamage();
    console.log('DAMAGE:' + monsterDamage);
    this.character.hp -= monsterDamage;

    setTimeout(() => {
      characterStatusShort();
    }, TIMEOUTS.oneSecond);

    if (this.character.hp <= 0) {
      setTimeout(() => {
        gameOver();
      }, TIMEOUTS.oneSecond);
    } else {
      setTimeout(() => {
        playerAttack();
      }, TIMEOUTS.oneSecond);
    }
  } else {
    console.log(`MONSTER MISSSED`);
    console.log(GAME_TEXT.textSpacing);
    setTimeout(() => {
      playerAttack();
    }, TIMEOUTS.oneSecond);
  }
}
function attackHit(damage) {
  if (this.attackRoll >= this.monster.ac) {
    this.attackDamage = damage;
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
    setTimeout(() => {
      monsterAttack();
    }, TIMEOUTS.oneSecond);
  } else {
    console.log(`${this.monster.name} died`.toUpperCase());
    console.log(`DROPPED: ${this.monster.loot}`);
    setTimeout(() => {
      playAgain();
    }, TIMEOUTS.oneSecond);
  }
}

module.exports = { combat, setCombat };

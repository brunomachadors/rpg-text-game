const { rawlist } = require('@inquirer/prompts');
const GAME_TEXT = require('../gameText/gameText');
const MONSTERS = require('../challenges/monsters');
const {
  characterStatusStyled,
  characterStatusShort,
} = require('../characters/character');
const { gameOver, playAgain } = require('../gameText/gameStatus');
const TIMEOUTS = require('../helpers/timeouts');
const { sneakAttack } = require('../attacks/sneakAttack');
const { stealth } = require('../characters/skills/stealth');
const { checkSpellResist } = require('../attacks/spellAttack');

function setCombat(mainMenu, character, startGame) {
  this.mainMenu = mainMenu;
  this.character = character;
  this.startGame = startGame;
  this.round;
}

function combat(monsterName, round = 0) {
  this.attacks = [];
  this.attackRoll;
  this.attackDamage;
  this.round = round;

  let monster = MONSTERS[monsterName];

  this.character.attacks.forEach(function callback(attack, index) {
    attacks.push({ name: attack.name, value: index });
  });

  setTimeout(() => {
    characterStatusStyled();
  }, TIMEOUTS.oneSecond);

  setTimeout(() => {
    playerAttack(monster);
  }, TIMEOUTS.oneSecond);
}

function playerAttack(monster) {
  console.log(`Round: ${this.round + 1}`);
  let sneakDamage = 0;
  if (this.round === 0) {
    if (this.character.class === 'rogue') {
      const stealthCheck = stealth(this.character, 12);
      if (stealthCheck && this.character.class === 'rogue') {
        sneakDamage = sneakAttack(this.character);
        console.log(GAME_TEXT.nextAttack);
      }
    }
  }

  rawlist({
    message: 'SELECT ATTACK',
    choices: attacks,
  }).then(function (attack) {
    console.log(this.character.attacks[attack].description);

    switch (this.character.attacks[attack].name) {
      case 'Turn Undead':
        const dc = this.character.spells.dc;
        if (this.character.attacks[attack].attack(dc, monster)) {
          console.log('Skeleton run away');
          setTimeout(() => {
            playAgain();
          }, TIMEOUTS.oneSecond);
        } else {
          console.log('Skeleton resisted');
          setTimeout(() => {
            monsterStatus(monster);
          }, TIMEOUTS.oneSecond);
        }
        break;
      default:
        const damage = this.character.attacks[attack].damage();

        if (this.character.attacks[attack].savingThrow?.atribute) {
          if (checkSpellResist(this.character.attacks[attack], monster)) {
            console.log(GAME_TEXT.monster.resist.fail);
            console.log(GAME_TEXT.combat.attackDamage(damage));
            monster.hp -= damage;
          } else {
            console.log(GAME_TEXT.monster.resist.success);
          }
          setTimeout(() => {
            monsterStatus(monster);
          }, TIMEOUTS.oneSecond);
        } else {
          this.attackRoll = this.character.attacks[attack].attack();
          console.log(GAME_TEXT.combat.attackBar);
          console.log(GAME_TEXT.combat.attack(this.attackRoll));
          setTimeout(() => {
            monster = attackHit(monster, damage + sneakDamage);
            monsterStatus(monster);
          }, TIMEOUTS.oneSecond);
        }
    }
  });
}

function monsterAttack(monster) {
  console.log(GAME_TEXT.combat.monsterAttack);
  let monsterAttack = monster.attacks[0].monsterAttack();
  console.log(GAME_TEXT.monster.attack(monsterAttack, this.character.ac));
  setTimeout(() => {
    monsterHit(monster, monsterAttack);
  }, TIMEOUTS.oneSecond);
}

function monsterHit(monster, monsterAttack) {
  this.round += 1;
  if (monsterAttack >= this.character.ac) {
    console.log(GAME_TEXT.monster.hit);
    let monsterDamage = monster.attacks[0].monsterDamage();
    console.log(GAME_TEXT.monster.damage(monsterDamage));
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
        playerAttack(monster);
      }, TIMEOUTS.oneSecond);
    }
  } else {
    console.log(`MONSTER MISSSED`);
    console.log(GAME_TEXT.textSpacing);
    setTimeout(() => {
      playerAttack(monster);
    }, TIMEOUTS.oneSecond);
  }
}
function attackHit(monster, damage) {
  if (this.attackRoll >= monster.ac) {
    console.log(GAME_TEXT.combat.hit);
    console.log(GAME_TEXT.combat.attackDamage(damage));
    monster.hp -= damage;
  } else {
    console.log(`YOU'VE MISSED`);
  }
  return monster;
}

function monsterStatus(monster) {
  console.log(GAME_TEXT.combat.monster);
  if (monster.hp > 0) {
    console.log(`${monster.name} HP: ${monster.hp}`.toUpperCase());
    setTimeout(() => {
      monsterAttack(monster);
    }, TIMEOUTS.oneSecond);
  } else {
    console.log(`${monster.name} died`.toUpperCase());
    console.log(`DROPPED: ${monster.loot}`);
    setTimeout(() => {
      playAgain();
    }, TIMEOUTS.oneSecond);
  }
}

module.exports = { combat, setCombat };

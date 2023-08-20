const { d20, roll } = require('../rolls/rolls');

const MONSTERS = {
  skeleton: {
    name: 'skeleton',
    hp: 12,
    ac: 12,
    attacks: [
      (sword = {
        monsterAttack: monsterAttack(20),
        monsterDamage: monsterDamage(60),
      }),
    ],
    loot: ['10 gold pieces', 'potion'],
  },
  ghost: {
    name: 'ghost',
    hp: 8,
    ac: 16,
    attacks: [
      (touch = {
        monsterAttack: monsterAttack(4),
        monsterDamage: monsterDamage(4),
      }),
    ],
    loot: ['ring'],
  },
};

function monsterAttack(modifier) {
  return () => d20() + modifier;
}

function monsterDamage(dice) {
  return () => roll(dice);
}

module.exports = MONSTERS;

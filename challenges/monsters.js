const { d20, roll } = require('../rolls/rolls');

const MONSTERS = {
  skeleton: {
    name: 'skeleton',
    hp: 13,
    ac: 13,
    speed: 30,
    abilityScore: {
      srt: 10,
      dex: 14,
      con: 15,
      int: 6,
      wis: 8,
      cha: 5,
    },
    attacks: [
      (sword = {
        monsterAttack: monsterAttack(3),
        monsterDamage: monsterDamage(6, 2),
      }),
    ],
    loot: ['10 gold pieces', 'potion'],
    type: 'undead',
    size: 'medium',
    vulnerability: ['bludgeoning'],
    damageImmunities: ['exhaustion', 'poison'],
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
    type: 'undead',
    size: 'medium',
  },
};

function monsterAttack(modifier) {
  return () => d20() + modifier;
}

function monsterDamage(dice, bonus = 0) {
  return () => roll(dice) + bonus;
}

module.exports = MONSTERS;

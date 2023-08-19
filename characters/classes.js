const { getAbilityScoreModifier } = require('../characters/abilityScore');

const CLASSES = {
  fighter: {
    baseHp: 10,
    abilityScore: {
      strength: 16,
      dexterity: 12,
      constitution: 14,
      inteligence: 10,
      wisdom: 12,
      charisma: 10,
    },
    proficiency: {
      weapon: {
        sword: true,
        bow: true,
        dagger: true,
        blunt: true,
      },
      armor: {
        light: true,
        medium: true,
        heavy: true,
      },
    },
  },
  rogue: {
    baseHp: 8,
    abilityScore: {
      strength: 10,
      dexterity: 16,
      constitution: 12,
      inteligence: 12,
      wisdom: 10,
      charisma: 14,
    },
    proficiency: {
      weapon: {
        bow: true,
        dagger: true,
      },
      armor: {
        light: true,
      },
      sneakAttack: true,
      toolkit: true,
    },
  },
  wizard: {
    baseHp: 6,
    abilityScore: {
      strength: 10,
      dexterity: 14,
      constitution: 10,
      inteligence: 16,
      wisdom: 12,
      charisma: 12,
    },
    proficiency: {
      weapon: {
        dagger: true,
      },
      spellbook: true,
    },
    spells: {
      arcane: true,
    },
  },

  cleric: {
    baseHp: 8,
    abilityScore: {
      strength: 14,
      dexterity: 10,
      constitution: 12,
      inteligence: 10,
      wisdom: 16,
      charisma: 12,
    },
    proficiency: {
      weapon: {
        blunt: true,
      },
      armor: {
        light: true,
        medium: true,
      },
      turnUndead: true,
    },
    spells: {
      divine: true,
    },
  },
};

module.exports = CLASSES;

console.log(getAbilityScoreModifier(CLASSES.fighter.strength));

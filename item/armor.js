const { getAbilityScoreModifier } = require('../characters/abilityScore');

const LIGHT = {
  padded: {
    ac: 11,
    strengh: null,
    stealth: false,
    weight: 8,
    cost: 5,
  },
  leather: {
    ac: 11,
    strengh: null,
    stealth: true,
    weight: 10,
    cost: 10,
  },
  studdedLeather: {
    ac: 12,
    strengh: null,
    stealth: true,
    weight: 13,
    cost: 45,
  },
};

const MEDIUM = {
  hide: {
    ac: 12,
    strengh: null,
    stealth: true,
    weight: 12,
    cost: 10,
  },
  chainShirt: {
    ac: 13,
    strengh: null,
    stealth: true,
    weight: 20,
    cost: 50,
  },
  scaleMail: {
    ac: 14,
    strengh: null,
    stealth: false,
    weight: 45,
    cost: 50,
  },
  spikedArmor: {
    ac: 14,
    strengh: null,
    stealth: false,
    weight: 45,
    cost: 75,
  },
  breastplate: {
    ac: 14,
    strengh: null,
    stealth: true,
    weight: 20,
    cost: 400,
  },
  halfplate: {
    ac: 15,
    strengh: null,
    stealth: false,
    weight: 40,
    cost: 750,
  },
};

const HEAVY = {
  ringMail: {
    ac: 14,
    strengh: null,
    stealth: false,
    weight: 40,
    cost: 30,
  },
  chainMail: {
    ac: 16,
    strengh: 13,
    stealth: false,
    weight: 55,
    cost: 75,
  },
  splint: {
    ac: 17,
    strengh: 15,
    stealth: false,
    weight: 60,
    cost: 200,
  },
  plate: {
    ac: 18,
    strengh: 15,
    stealth: false,
    weight: 65,
    cost: 1500,
  },
};

const SHIELD = {
  shield: {
    ac: 2,
    strengh: null,
    stealth: true,
    weight: 6,
    cost: 10,
  },
};

const ARMORS = {
  light: LIGHT,
  medium: MEDIUM,
  heavy: HEAVY,
  shield: SHIELD,
};

function getArmorClass(armor, dexterity) {
  const armorType = getArmorType(armor);
  switch (armorType) {
    case 'light':
      return LIGHT[armor].ac + getAbilityScoreModifier(dexterity);
    case 'medium':
      return (
        MEDIUM[armor].ac +
        (getAbilityScoreModifier(dexterity) > 2
          ? 2
          : getAbilityScoreModifier(dexterity))
      );
    case 'heavy':
      return HEAVY[armor].ac;
    case 'shield':
      return SHIELD[armor].ac;
    default:
      return 10 + getAbilityScoreModifier(dexterity);
  }
}

function getAllArmors() {
  return ARMORS;
}

function getArmorType(armor) {
  if (LIGHT[armor]) {
    return 'light';
  }

  if (MEDIUM[armor]) {
    return 'medium';
  }
  if (HEAVY[armor]) {
    return 'heavy';
  }

  if (SHIELD[armor]) {
    return 'shield';
  }
}

module.exports = { getArmorClass, getAllArmors };

const CANTRIP = require('../../spells/arcaneSpells');
const { getWeaponAttack } = require('../../attacks/weaponAttack');
const { spellAttack } = require('../../attacks/spellAttack');
const { getArmorClass } = require('../../item/armor');
const { getAbilityScoreModifier } = require('../abilityScore');

const proficiencyModifier = 2;

const ABILITY_SCORE = {
  strength: 10,
  dexterity: 14,
  constitution: 10,
  inteligence: 16,
  wisdom: 12,
  charisma: 12,
};

const SPELLCASTING = {
  ability: 'inteligence',
  score: ABILITY_SCORE.inteligence,
  accuracy:
    getAbilityScoreModifier(ABILITY_SCORE.inteligence) + proficiencyModifier,
  dc:
    8 +
    getAbilityScoreModifier(ABILITY_SCORE.inteligence) +
    proficiencyModifier,
};

const STAFF = getWeaponAttack('staff', ABILITY_SCORE, proficiencyModifier);
const FIREBOLT = spellAttack(SPELLCASTING, CANTRIP.firebolt);
const RAY_OF_FROST = spellAttack(SPELLCASTING, CANTRIP.rayOfFrost);
const ATTACKS = [STAFF, FIREBOLT, RAY_OF_FROST];
const ARMOR = getArmorClass('robe', ABILITY_SCORE.dexterity);
const SPELLS = [FIREBOLT.name, RAY_OF_FROST.name];

const WIZARD = {
  baseHp: 6,
  abilityScore: ABILITY_SCORE,
  attacks: ATTACKS,
  spells: SPELLS,
  armor: ARMOR,
  proficiency: {
    spellbook: true,
  },
  proficiencyModifier,
  spellcastingAbility: SPELLCASTING.ability,
};

module.exports = WIZARD;

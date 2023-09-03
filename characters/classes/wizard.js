const CANTRIP = require('../../spells/arcaneSpells');
const { getWeaponAttack } = require('../../attacks/weaponAttack');
const { spellCasting } = require('../../attacks/spellAttack');
const { getArmorClass } = require('../../item/armor');

const proficiencyModifier = 2;
const spellcastingAbility = 'inteligence';

const ABILITY_SCORE = {
  strength: 10,
  dexterity: 14,
  constitution: 10,
  inteligence: 16,
  wisdom: 12,
  charisma: 12,
};

const STAFF = getWeaponAttack('staff', ABILITY_SCORE, proficiencyModifier);
const FIREBOLT = spellCasting(
  CANTRIP.firebolt,
  spellcastingAbility,
  ABILITY_SCORE[spellcastingAbility]
);
const RAY_OF_FROST = spellCasting(
  CANTRIP.rayOfFrost,
  spellcastingAbility,
  ABILITY_SCORE[spellcastingAbility]
);
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
  spellcastingAbility: spellcastingAbility,
};

module.exports = WIZARD;

const { getAbilityScoreModifier } = require('./abilityScore');
const CLASSES = require('./classes');

function characterSheet(classType) {
  let CHARACTER = {
    class: classType,
    level: 1,
    hp:
      CLASSES[classType].baseHp +
      getAbilityScoreModifier(CLASSES[classType].abilityScore.constitution),
    ac: CLASSES[classType].armor.ac,
    atributes: CLASSES[classType].abilityScore,
    attacks: CLASSES[classType].attacks ? CLASSES[classType].attacks : null,
    spells: CLASSES[classType].spells ? CLASSES[classType].spells : null,
    proficiencies: CLASSES[classType].proficiency
      ? CLASSES[classType].proficiency
      : null,
  };

  return CHARACTER;
}

module.exports = { characterSheet };

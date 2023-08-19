const { getAbilityScoreModifier } = require('./abilityScore');
const CLASSES = require('./classes');

const proficiency = 2;

function characterSheet(classType) {
  const CHARACTER = {
    class: classType,
    level: 1,
    hp:
      CLASSES[classType].baseHp +
      getAbilityScoreModifier(CLASSES[classType].abilityScore.constitution),
    atributes: CLASSES[classType].abilityScore,
    proficiencies: CLASSES[classType].proficiency,
    spells: CLASSES[classType].spells ? CLASSES[classType].spells : 'No spells',
  };
  return CHARACTER;
}

module.exports = { characterSheet };

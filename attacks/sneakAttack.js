const { d6 } = require('../rolls/rolls');

function sneakAttack(character) {
  if (
    character.proficiency?.sneakAttack
      ? character.proficiency?.sneakAttack
      : false
  ) {
    return d6(2);
  } else return 0;
}

module.exports = { sneakAttack };

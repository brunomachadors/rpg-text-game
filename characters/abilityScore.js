function getAbilityScoreModifier(abilityScore) {
  let modifier = 0;
  switch (abilityScore) {
    case 10 || 11:
      modifier = 0;
      break;
    case 12 || 13:
      modifier = 1;
      break;
    case 14 || 15:
      modifier = 2;
      break;
    case 16 || 17:
      modifier = 3;
      break;
    case 18 || 19:
      modifier = 4;
      break;
  }
  return modifier;
}

module.exports = { getAbilityScoreModifier };

const WEAPON = {
  sword: {
    atribute: 'strength',
    damage: 8,
    ranged: false,
  },
  bow: {
    atribute: 'dexterity',
    damage: 8,
    ranged: true,
  },
  dagger: {
    atribute: 'dexterity',
    damage: 4,
    ranged: false,
  },
  blunt: {
    atribute: 'strength',
    damage: 6,
    ranged: false,
  },
};

function getWeapon(weapon) {
  return WEAPON[weapon];
}

module.exports = { getWeapon };

const WEAPON = {
  sword: {
    name: 'Longsword',
    atribute: 'strength',
    damage: 8,
    description: 'Longsword attacks with strength and deals 1d8 damange',
  },
  bow: {
    name: 'Longbow',
    atribute: 'dexterity',
    damage: 8,
  },
  dagger: {
    name: 'Dagger',
    atribute: 'dexterity',
    damage: 4,
  },
  blunt: {
    name: 'Blunt',
    atribute: 'strength',
    damage: 6,
  },
  staff: {
    name: 'Quarterstaff',
    atribute: 'strength',
    damage: 6,
  },
};

module.exports = WEAPON;

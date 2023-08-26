const WEAPON = {
  sword: {
    name: 'Longsword',
    description:
      'A longsword, also written long sword, is a one-handed melee slashing weapon.\n It has a straight blade, and is typically around 3½ feet in length.',
    atribute: 'strength',
    maxDamage: 8,
    description: 'Longsword attacks with strength and deals 1d8 damage',
  },
  bow: {
    name: 'Longbow',
    description: `A longbow, also written long bow, is a ranged weapon which fires projectiles known as arrows. It is distinguished from the shortbow by its increased length, which allows an archer to impart greater energy into its pull, making it more lethal.`,
    atribute: 'dexterity',
    maxDamage: 8,
  },
  dagger: {
    name: 'Dagger',
    description: `The dagger is a small piercing melee weapon designed to be held in one hand. It can also be used as a thrown weapon, and is relatively easily concealed`,
    atribute: 'dexterity',
    maxDamage: 4,
  },
  mace: {
    name: 'Mace',
    description:
      'A mace is a bludgeoning melee weapon wielded in one hand.    ',
    atribute: 'strength',
    maxDamage: 6,
  },
  staff: {
    name: 'Quarterstaff',
    description: '',
    atribute: 'strength',
    maxDamage: 6,
  },
};

module.exports = WEAPON;

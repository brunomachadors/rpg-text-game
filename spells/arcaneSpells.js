const CANTRIP = {
  firebolt: {
    name: 'Firebolt',
    level: 0,
    castingTime: 1,
    range: 120,
    components: ['V', 'S'],
    description: ` You hurl a mote of fire at a creature or object\n within range. Make a ranged spell attack against\n the target. \n\n On a hit, the target takes 1d10 fire damage.`,
    atHigherLevels: `At Higher Levels. This spell’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).`,
    maxDamage: 10,
  },
  rayOfFrost: {
    name: 'Ray of Frost',
    level: 0,
    castingTime: 1,
    range: 60,
    components: ['V', 'S'],
    description: ` A frigid beam of blue-white light streaks\n toward a creature within range.\n\n Make a ranged spell attack against the target.\n\n On a hit, it takes 1d8 cold damage, and its\n speed is reduced by 10 feet until the start of\n your next turn.`,
    maxDamage: 8,
  },
};

module.exports = CANTRIP;

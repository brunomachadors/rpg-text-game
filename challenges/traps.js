require('colors');

const TRAPS = {
  arrow: {
    name: 'Arrow Trap',
    description:
      `\n"After activating the trap, an arrow is shot with\nspeed towards the character."`
        .blue,
    accuracy: 7,
    maxDamage: 10,
    cd: 8,
  },
};

module.exports = TRAPS;

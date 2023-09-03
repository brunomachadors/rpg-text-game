const CANTRIP = {
  sacredFlame: {
    name: 'Sacred Flame',
    level: 0,
    castingTime: 1,
    range: 60,
    components: ['V', 'S'],
    description: `Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.`,
    atHigherLevels: `The spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).`,
    maxDamage: 8,
    damageType: 'radiant',
    savingThrow: 'dexterity',
  },
};

module.exports = CANTRIP;

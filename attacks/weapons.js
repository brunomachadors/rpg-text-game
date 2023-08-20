const WEAPON = {
    sword: {
        name: 'Longsword',
        atribute: 'strength',
        maxDamage: 8,
        description: 'Longsword attacks with strength and deals 1d8 damange',
    },
    bow: {
        name: 'Longbow',
        atribute: 'dexterity',
        maxDamage: 8,
    },
    dagger: {
        name: 'Dagger',
        atribute: 'dexterity',
        maxDamage: 4,
    },
    blunt: {
        name: 'Blunt',
        atribute: 'strength',
        maxDamage: 6,
    },
    staff: {
        name: 'Quarterstaff',
        atribute: 'strength',
        maxDamage: 6,
    },
};

module.exports = WEAPON;

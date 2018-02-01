const CLASS = require('../deck_classes');

module.exports = {
    name: 'Hel',
    faction: 'Norse',
    health: 14,
    team: 'Hel & Nighogg',
    class: CLASS.GREEN,
    specials: [
        {
            name: 'Ragnarok',
            qty: 2,
            atk: 8,
            info: 'Ranged : All Army of the dead may rise again at full health. This does not count as an action. Nidhogg can be moved to any spot on the map'
        },
        {
            name: 'Swallowing of the Sun & Moon',
            qty: 2,
            info: 'AoE : Pick one player to discard a card at random and skip their turn'
        },
        {
            name: 'Fimbulwinter',
            qty: 2,
            info: 'This card can be played anytime. A harsh cold winter will stop a foe in their tracks. '
        },
        {
            name: 'Corpse Fence',
            qty: 2,
            info: 'Hel conjures a fence of dead corpses. Any character in an adjacent square lose 1 health.'
        },
    ],

    transformations: [
        {
            form: 'Invulnerability',
            effect: 'Hel is protected during one round'
        }
    ],

    support: [
        {
            name: 'Nidhogg',
            health: 20,
            class: CLASS.MINOR_STRONG,

            specials: [
                {
                    name: 'Stay dead',
                    qty: 2,
                    info: 'Discard an AOTD character to give Hel or Nidhogg health'
                },
                {
                    name: 'Revenge on the Gods',
                    qty: 2,
                    info: 'AOTD can attack an enemy dealing damage based on a roll'
                },
                {
                    name: 'Never ending Hunger',
                    qty: 3,
                    atk: 10,
                    info: 'Any player that is adjacent to the player that is attacked, will also be given X amount of damage. '
                },
                {
                    name: 'flame broiled',
                    qty: 4,
                    atk: 5,
                    info: 'Melee :  ranged, high damage'
                },
                {
                    name: 'Prolonged death',
                    qty: 3,
                    atk: 5,
                    info: 'Venom action card that does 3 damage and allows Nidhogg to run away by 3 spaces. This venom card does 1 damage until the victim rolls a 3.'
                }
            ]
        }
    ]
};


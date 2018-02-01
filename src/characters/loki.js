const CLASS = require('../deck_classes');

module.exports = {
    name: 'Loki',
    faction: 'Norse',
    team: 'Loki & Fenrir + Jormungand',
    health: 10,
    class: CLASS.GREEN,
    specials: [
        {
            name: 'Shapeshifting',
            qty: 3,
            atk: 0,
            info: 'Ranged : This card will allow Loki to blindly pull any characters card from their hand and use that card'
        },
        {
            name: 'Shieldr',
            qty: 2,
            info: 'AoE : 1 Turn : This will protect Loki during one round of turns'
        },
        {
            name: 'Teleport',
            qty: 2,
            info: 'TLoki can use this card to pick a spot on the map to teleport but this will use up all actions'
        },
        {
            name: 'Trickster',
            qty: 2,
            info: 'Can steal a players health. A player with more health will switch health with Loki'
        },
    ],

    transformations: [
        {
            form: 'King of the Giants',
            effect: 'Loki can move double of his roll and attacks are double'
        }
    ],

    support: [
        {
            name: 'Fenrir',
            health: 13,
            class: CLASS.MINOR_STRONG,

            specials: [
                {
                    name: 'Fenrir Chaos',
                    qty: 2,
                    info: 'AoE : Can add an additional action- does not take up an action'
                },
                {
                    name: 'Fenrir Pack',
                    qty: 2,
                    info: 'Can shapeshift into a pack of 3 wolves and moves separately around the board. The health is divided between all 3. Attack strength remains the same.'
                },
                {
                    name: 'Fenrir Strength',
                    qty: 3,
                    atk: 7,
                    info: 'Ranged : Fenrir uses massive jaws to bit an enemy up to two spaces away.'
                },
                {
                    name: 'Fenrir Slash',
                    qty: 2,
                    atk: 5,
                    info: 'Melee :  Slashes an enemy. '
                }
            ],
        },
        {
            name: 'Jormungand',
            health: 15,
            class: CLASS.MINOR_STRONG,

            specials: [
                {
                    name: 'Jormungand Protection',
                    qty: 2,
                    info: 'AoE : Has an energy protection can be used during an attack'
                },
                {
                    name: 'Jormungand Block',
                    qty: 2,
                    info: 'Ranged - The Serpent uses its long body to block players from advancing. This can be used anytime.'
                },
                {
                    name: 'Jormungand Materialize',
                    qty: 3,
                    atk: 7,
                    info: 'Ranged : Can move to any spot on the board and force combat with any character.'
                },
                {
                    name: 'Jormungand Crush',
                    qty: 2,
                    atk: 10,
                    info: 'Melee :  Crushes an enemy. '
                },
            ]
        }
    ]
};


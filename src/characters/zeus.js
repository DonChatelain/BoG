const CLASS = require('../deck_classes');

module.exports = {
    name: 'Zeus',
    faction: 'Greek',
    team: 'Zeus & Poseidon',
    health: 18,
    class: CLASS.BLUE, // provides basic atk/def cards (10)
    specials: [
        {
            name: 'Ethereal Bolt',
            qty: 3,
            atk: 8,
            info: 'Ranged : Zeus hurls a magnifescent bold of lightning at an opponent'
        },
        {
            name: 'Sacred Thunder',
            qty: 2,
            info: 'AoE : 2 radius : All opponents within range have one less action on their next turn'
        },
        {
            name: 'Harpyia',
            qty: 2,
            info: 'The Hounds of Zeus may carry off an adjacent opponent to any open space on the board'
        },
        {
            name: 'Wisdom of Metis',
            qty: 2,
            info: 'Draw 3 cards'
        },
    ],

    transformations: [
        {
            form: 'Eagle',
            effect: ''
        }
    ],

    support: [
        {
            name: 'Poseidon',
            health: 15,
            class: CLASS.MINOR_STRONG,

            specials: [
                {
                    name: 'Great Flood',
                    qty: 2,
                    info: 'AoE : 1 radius : Instantly deal 3 damage'
                },
                {
                    name: 'Drought',
                    qty: 2,
                    info: 'Draw 2 cards; other players may not draw cards until this player\'s next turn'
                },
                {
                    name: 'Cast Trident',
                    qty: 3,
                    atk: 7,
                    info: 'Ranged : (Fill me out!)'
                },
                {
                    name: 'Unleash the Depths',
                    qty: 2,
                    atk: 5,
                    info: 'Melee :  Conjure a monsterous sea serpent to attack an opponent; Move Poseidon up to 6 spaces'
                },
                {
                    name: 'Storm of the Century',
                    qty: 1,
                    info: 'AoE: 3 radius : If both characters are still alive, instantly deal 2 damage to opponents within range; affected players have on less action on their next turn'
                }
            ]
        }
    ]
};



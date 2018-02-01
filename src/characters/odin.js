const CLASS = require('../deck_classes');

module.exports = {
    name: 'Odin',
    faction: 'Norse',
    health: 15,
    team: 'Odin & Thor',
    class: CLASS.BLUE,
    specials: [
        {
            name: 'Gungnir & Mjolnir',
            qty: 2,
            atk: 10,
            info: 'Ranged : This card will do damage based on positions of enemies. 1 space from Thor deals 3 damage, 2 space deals 2 damage, 3 or more deals 1 damage. All other characters will take at least 1 damage.'
        },
        {
            name: 'Huginn & Muninn',
            qty: 3,
            info: 'AoE :  Odin’s ravens can look at an opponent\'s hand with less health than Odin and discard 1 card'
        },
        {
            name: 'Sleipnir',
            qty: 2,
            info: 'Was Odin’s 8 legged horse, this will allow Odin to move an additional X spaces and jump over obstacles'
        },
        {
            name: 'Valkyrie Tower',
            qty: 2,
            info: 'Search through the top 5 card and pick (1) card - put the rest back into your deck and reshuffle'
        },
    ],

    transformations: [
        {
            form: 'Raven',
            effect: 'Remove an action from each character for two rounds'
        }
    ],

    support: [
        {
            name: 'Thor',
            health: 18,
            class: CLASS.MINOR_STRONG,

            specials: [
                {
                    name: 'Sanctification',
                    qty: 2,
                    info: 'AoE : 1 radius : The power of healing. This card can give Thor 1 health and Odin 2 health.'
                },
                {
                    name: 'Jarnglofar',
                    qty: 2,
                    info: 'Draw 2 cards; The belt that Thor wears, this can double his attack & healing power once per-turn.'
                },
                {
                    name: 'Mjolnir lightning',
                    qty: 3,
                    atk: 7,
                    info: 'Ranged : Players with in 2 space of Thor will be dealt 2 damage'
                },
                {
                    name: 'Mjolnir',
                    qty: 3,
                    atk: 5,
                    info: 'Melee :  Throw attack or block, Thor can throw Mjolnir to attack a foe or Place Mjolnir in a space blocking that player from moving there.'
                },
                {
                    name: 'Heimdall',
                    qty: 1,
                    info: 'AoE: 3 radius : Is the watcher of the nine realms and gatekeeper of Asgard. This card will allow Thor to move anywhere on the board.'
                }
            ]
        }
    ]
};


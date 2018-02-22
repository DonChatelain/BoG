import guid from 'guid';

import CLASS from './deck_classes';

export default buildDeck;

function buildDeck (teamData) {
    const deck = [];
    teamData.cards.forEach(card => {
        deck.push(new Card(card));
    });
    console.log(`generated deck of ${deck.length} cards`);
    console.log('deck', deck);
    return shuffle(deck);
}

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

function Card (opts) {
    this.guid = guid.raw();
    this.name = opts.name || 'Basic';
    this.owner = opts.owner;
    this.info = opts.info;
    this.atk = opts.attack || 0;
    this.def = opts.defense || 0;

    if (opts.info == null) delete this.info;
}


import guid from 'guid';

export { buildDeck, shuffle };

function buildDeck (teamData) {
    const deck = [];
    teamData.cards.forEach((card, i) => {
        deck.push(new Card(card));
    });    

    console.log(`generated deck of ${deck.length} cards`);
    console.log('deck', deck);
    console.log('special card count: ', deck.filter(c => c.name !== 'Basic').length)
    console.log('basic melee count: ', deck.filter(c => c.name === 'Basic' && !c.info).length);
    console.log('basic ranged count:', deck.filter(c => c.info === 'Ranged').length);
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


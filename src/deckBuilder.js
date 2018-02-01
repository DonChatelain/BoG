import guid from 'guid';

export default buildDeck;


function buildDeck (char) {
    const deck = [];

    if (char == null) {
        console.error('buildDeck received null');
        return;
    }

    char.class.forEach(cardType => {
        for (let i = 0; i < cardType.qty; i++) {
            const options = {
                char: char.name,
                atk: cardType.atk,
                def: cardType.def
            };
            deck.push(new Card(options));
        }
    });

    char.specials.forEach(card => {
        for (let i = 0; i < card.qty; i++) {
            const options = {
                name: card.name,
                char: char.name,
                info: card.info,
                atk: card.atk,
            };
            deck.push(new Card(options));
        }
    });

    char.support.forEach(supportChar => {
        supportChar.class.forEach(cardType => {
            for (let i = 0; i < cardType.qty; i++) {
                const options = {
                    char: supportChar.name,
                    atk: cardType.atk,
                    def: cardType.def
                };
                deck.push(new Card(options));
            }
        });
        supportChar.specials.forEach(card => {
            for (let i = 0; i < card.qty; i++) {
                const options = {
                    name: card.name,
                    char: supportChar.name,
                    info: card.info,
                    atk: card.atk,
                };  
                deck.push(new Card(options));
            }
        });
    });
    console.log(`generated deck of ${deck.length} cards`);
    return shuffle(deck);
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
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
    this.character = opts.char;
    this.info = opts.info;
    this.atk = opts.atk || 0;
    this.def = opts.def || 0;

    if (opts.info == null) delete this.info;
}


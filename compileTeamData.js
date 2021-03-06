
const CLASSES = require('./src/deck_classes');

module.exports = function(rows) {
    const teams = {};
    let teamName;
  
    const COL = {
      CHAR_NAME: 0,
      FACTION: 1,
      HEALTH: 2,
      DECK_CLASS: 3,
      CARD_NAME: 4,
      CARD_INFO: 5,
      CARD_OWNER: 6,
      TEAM_NAME: 7,
      QUANTITY: 8,
      CARD_ATK: 9,
      CARD_DEF: 10,
    };
    // skip top row (index 0), as its for labels
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
  
      if (teamName != row[COL.TEAM_NAME] && row[COL.TEAM_NAME] != null) {
        // init new team
        teamName = row[COL.TEAM_NAME];
        const team = new Team(teamName);
        // add primary character
        team.addCharacter(row[COL.CHAR_NAME], row[COL.HEALTH]);
        // primary character health
        team.addHealth(row[COL.HEALTH]);
        // deck color class + add basic cards
        team.setDeckClass(row[COL.DECK_CLASS]);
  
        teams[teamName] = team;
  
      } else if (row[COL.CHAR_NAME] != '' && row[COL.TEAM_NAME] != null) {
        // adding support character + health
        teams[teamName].addCharacter(row[COL.CHAR_NAME], row[COL.HEALTH]);
        teams[teamName].addHealth(row[COL.HEALTH]);
        // teams[teamName].setSupportClass(row[COL.DECK_CLASS]); // instead we're now just adding 2x primary char basic cards for all to share
      }
  
      // add cards
      const qty = isNaN(parseInt(row[COL.QUANTITY])) ? 0 : parseInt(row[COL.QUANTITY]);
  
      for (let i = 0; i < qty; i++) {
        teams[teamName].addCard({
          name: row[COL.CARD_NAME],
          owner: row[COL.CARD_OWNER],
          info: row[COL.CARD_INFO],
          attack: row[COL.CARD_ATK],
          defense: row[COL.CARD_DEF],
        });
      }
    }
    console.log('Team data updated');
    return teams;
}

function Team(name) {
    this.name = name;
    this.health = 0;
    this.cardCount = 0;
    this.totalAtk = 0;
    this.totalDef = 0;
    this.deckClass = null;
    // this.supportClass = null;
    this.characters = [];
    this.cards = [];
    this.addCharacter = (name, health) => {
      this.characters.push({ name, health: parseInt(health, 10) });
    };
    this.addCard = (card) => {
      this.cardCount++;
      this.cards.push(card);
    }
    this.addHealth = (health) => {
      let h = isNaN(parseInt(health)) ? 0 : parseInt(health);
      this.health += h;
    };
    this.setDeckClass = (color) => {
      this.deckClass = color;
      // add basic cards for team
      const basicCardClass = CLASSES.find(cls => cls.colorClass === color);
      if (!basicCardClass) return console.error('cannot find basic card class; color:', color, 'team:', this.name);
      basicCardClass.cards.forEach(c => {
        const card = Object.assign({}, c);
        for (let i = 0; i < card.qty; i++) {
          card.owner = this.name;
          card.name = 'Basic';
          if (card.rng) {
            card.info = 'Ranged';
          }
          this.addCard(card);
        }
      })

    };
  }
  
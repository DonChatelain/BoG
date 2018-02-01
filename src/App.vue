<script>
import Hand from './components/Hand';
import Discards from './components/Discards';
import GodInfo from './components/GodInfo';

import characters from './CharacterCollector';
import buildDeck from './deckBuilder';

const STARTING_CARD_COUNT = 4;
const VIEW = {
  HAND: 0,
  INFO: 1,
  DISCARD: 2,
};

export default {
  name: 'App',
  components: {
    Hand,
    Discards,
    GodInfo,
  },
  data() {
    return {
      teamName: 'default',
      deck: [],
      cards: [],
      discardPile: [],
      showDiscardPile: false,
      characters,
      showInfoPanel: true,
      isHoverDrawPile: false,
      drawPileText: 'Battle of Gods',
      VIEW,
      currentView: VIEW.INFO,
      initialized: false,
    }
  },
  computed: {
    getView() {
      return this.currentView;
    },
  },
  methods: {
    setupDeck(teamName){
      const team = this.getTeamByName(teamName);
      if (!team) return console.log('Failed to getTeamByName', teamName);
      this.initialized = true;
      this.teamName = teamName;
      this.deck = buildDeck(team);
      this.cards = this.deck.splice(0, STARTING_CARD_COUNT);
      this.resetDiscards();
    },
    drawCard() {
      return this.deck.shift();
    },
    removeCard(card) {
      if (this.currentView === VIEW.DISCARD) {
        const foundIndex = this.discardPile.findIndex(c => c.guid === card.guid);
        if (foundIndex != -1) {
          this.cards.unshift(card);
          this.discardPile.splice(foundIndex, 1);
        }
      } else if (this.currentView === VIEW.HAND) {
        const foundIndex = this.cards.findIndex(c => c.guid === card.guid);
        if (foundIndex != -1) {
          this.discardPile.unshift(card);
          this.cards.splice(foundIndex, 1);
        }
      }
    },
    viewDiscard() {
      this.currentView = VIEW.DISCARD;
    },
    viewDiscardText() {
      if (this.currentView === VIEW.DISCARD) {
        return 'Back';
      } 
      return 'View Discard Pile';
    },
    viewHand() {
      this.currentView = VIEW.HAND;
    },
    viewInfo() {
      this.currentView = VIEW.INFO;
    },
    viewInfoText() {
      if (this.currentView === VIEW.INFO) {
        return 'Back';
      }
      return this.teamName;
    },
    resetDiscards() {
      this.discardPile = [];
    },
    getTeamByName(name) {
      let team = null;
      Object.keys(characters).forEach(char => {
        if (characters[char].team === name) team = characters[char];
      });
      return team;
    },
    onHoverDrawPile() {
      this.isHoverDrawPile = true;
      this.drawPileText = 'DRAW CARD';
    },
    offHoverDrawPile() {
      this.isHoverDrawPile = false;
      this.drawPileText = 'Battle of Gods';
    },

  }
}
</script>

<template>
  <div id="app">
    <header>

      <h1
        v-if="!initialized"
        style="width: 100%;">
        Battle of Gods
      </h1>

      <button 
        v-show="initialized"
        v-bind:class="{ 'hidden': getView === VIEW.DISCARD || !initialized}"
        v-on:click="getView === VIEW.HAND ? viewInfo() : viewHand()">
        {{viewInfoText()}}
      </button>

      <div class="drawpile"
        v-on:click="cards.unshift(drawCard())"
        v-show="initialized"
        v-bind:class="{ 'hover-drawpile': isHoverDrawPile, 'hidden': getView !== VIEW.HAND }"
        v-on:mouseover="onHoverDrawPile()"
        v-on:mouseout="offHoverDrawPile()">
        <h1>
          {{drawPileText}}
        </h1>
        <h2>
          <span v-if="!isHoverDrawPile">Draw Pile</span>
           ( {{deck.length}} )
        </h2>
      </div>

      <button
        v-show="initialized"
        v-bind:class="{ 'hidden': getView === VIEW.INFO }"
        v-on:click="getView === VIEW.HAND ? viewDiscard() : viewHand()">
        {{viewDiscardText()}}
      </button>
    </header>
    
    <Hand
      v-if="getView === VIEW.HAND"
      v-bind:cards="cards"
      v-bind:drawCard="drawCard"
      v-bind:removeCard="removeCard">
    </Hand>

    <GodInfo
      v-if="getView === VIEW.INFO"
      v-bind:characters="characters"
      v-bind:setupDeck="setupDeck"
      v-bind:viewHand="viewHand"
      v-bind:teamName="teamName">
    </GodInfo>

    <Discards
      v-if="getView === VIEW.DISCARD"
      v-bind:cards="discardPile"
      v-bind:removeCard="removeCard">
    </Discards>
    
  </div>
</template>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.hidden {
  visibility: hidden;
}

header {
  display: flex;
  justify-content: space-between;
}

div.drawpile {
  width: 150px;
  height: 60px;
  padding: 0px 0;
  cursor: pointer;
  border: 1px solid rgb(237, 237, 237);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 0 0 1px 0 rgb(197, 197, 197);
  transition: box-shadow 200ms;
  user-select: none;
}

.hover-drawpile {
  box-shadow: 0 0 3px 0 rgb(197, 197, 197) !important;
}

.drawpile h1 {
  margin: 0;
  padding: 0;
  font-size: 16px;
}

.drawpile h2 {
  font-size: 12px;
  margin: 0;
  padding: 0;
}

header button {
  width: 80px;
  height: 60px;
  background: transparent;
}

button {
  font-family: 'Avenir';
  font-weight: bold;
  background: transparent;
  cursor: pointer;
  opacity: 0.7;
  user-select: none;
}
button:hover {
  opacity: 1;
}
button:focus {
  outline: 0;
}

</style>

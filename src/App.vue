<template>
  <div id="app">
    <h1 class="main">Battle of Gods</h1>

    <GodInfo
      v-bind:characters="characters"
      v-bind:setupDeck="setupDeck">
    </GodInfo>

    <button
      class="discards"
      v-on:click="toggleDiscards">
      Discard Pile
    </button>
    
    <Hand
      v-if="show === false"
      v-bind:cards="cards"
      v-bind:drawCard="drawCard"
      v-bind:removeCard="removeCard">
    </Hand>

    <Discards
      v-if="show === true"
      v-bind:cards="discardPile"
      v-bind:removeCard="removeCard">
    </Discards>
    
  </div>
</template>

<script>
import Hand from './components/Hand';
import Discards from './components/Discards';
import GodInfo from './components/GodInfo';

import characters from './CharacterCollector';
import buildDeck from './deckBuilder';

const STARTING_CARD_COUNT = 4;

export default {
  name: 'App',
  components: {
    Hand,
    Discards,
    GodInfo,
  },
  data() {
    return {
      deck: [],
      cards: [],
      discardPile: [],
      show: false,
      characters,
    }
  },
  methods: {
    setupDeck(teamData){
      this.resetDiscards();
      this.deck = buildDeck(teamData);
      this.cards = this.deck.splice(0, STARTING_CARD_COUNT);
    },
    drawCard() {
      return deck.shift();
    },
    removeCard(card) {
      if (this.show) {
        const foundIndex = this.discardPile.findIndex(c => c.guid === card.guid);
        if (foundIndex != -1) {
          this.cards.unshift(card);
          this.discardPile.splice(foundIndex, 1);
        }
      } else {
        const foundIndex = this.cards.findIndex(c => c.guid === card.guid);
        if (foundIndex != -1) {
          this.discardPile.unshift(card);
          this.cards.splice(foundIndex, 1);
        }
      }
    },
    toggleDiscards() {
      this.show = !this.show;
    },
    resetDiscards() {
      this.discardPile = [];
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
button.discards {
  position: absolute;
  right: 20px;
  padding: 5px;
  background: transparent;
  cursor: pointer;
}

</style>

<template>
  <div id="app">
    <h1 class="main">Battle of Gods</h1>
    <button
      class="discards"
      v-on:click="toggleDiscards">
      Discard Pile
    </button>
    
    <Hand
      v-if="showDiscardPile === false"
      v-bind:cards="cards"
      v-bind:drawCard="drawCard"
      v-bind:removeCard="removeCard">
    </Hand>

    <Discards
      v-if="showDiscardPile === true"
      v-bind:cards="discardPile"
      v-bind:removeCard="removeCard">
    </Discards>
    
  </div>
</template>

<script>
import Hand from './components/Hand';
import Discards from './components/Discards';
import zeus from './characters/zeus';
import buildDeck from './deckBuilder';

const STARTING_CARD_COUNT = 4;

const charName = zeus.name;
const deck = buildDeck(zeus);
const cards = deck.splice(0, STARTING_CARD_COUNT);
const discardPile = [];

export default {
  name: 'App',
  components: {
    Hand,
    Discards,
  },
  computed: {
    showDiscardPile(show = false) {
      return this.show;
    }
  },
  data() {
    return {
      charName,
      deck,
      cards,
      discardPile,
      show: false,
    }
  },
  methods: {
    drawCard() {
      return deck.shift();
    },
    removeCard(card) {
      if (this.show) {
        const foundIndex = discardPile.findIndex(c => c.guid === card.guid);
        if (foundIndex != -1) {
          cards.unshift(card);
          discardPile.splice(foundIndex, 1);
        }
      } else {
        const foundIndex = cards.findIndex(c => c.guid === card.guid);
        if (foundIndex != -1) {
          discardPile.push(card);
          cards.splice(foundIndex, 1);
        }
      }

    },
    toggleDiscards() {
      this.show = !this.show;
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
}

</style>

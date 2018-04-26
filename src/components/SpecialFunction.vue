<script>
import Card from './Card.vue';
import CardList from './CardList.vue';

export default {
  name: 'SpecialFunction',
  components: {
    Card,
    CardList,
  },
  props: [
    'specialFunctionData',
    'specialFunctionCards',
    'viewHand',
    'deck',
    'shuffleDiscardsIntoDeck',
    'returnToDeck',
    'removeCard',
    'shuffle',
  ],
  data() {
    return {
      finished: false || this.specialFunctionData.name === this.specialFunctionCards.HARVEST_MOON,
      showCardList: this.specialFunctionData.name !== this.specialFunctionCards.HARVEST_MOON, 
      cardsFromDeck: [],
    }
  },
  created() {
      switch(this.specialFunctionData.name) {
        case this.specialFunctionCards.VALKYRIE_TOWER:
          // 5 cards
          this.cardsFromDeck = this.deck.splice(0, 5);
        break;
        case this.specialFunctionCards.ANIMAL_SACRIFICE: 
          // 4 cards
          this.cardsFromDeck = this.deck.splice(0,4);
        break;
        case this.specialFunctionCards.EYE_OF_HORUS: 
          // all deck
          this.cardsFromDeck = this.deck.splice(0);
        break;
        default: break;
      }
  },
  methods: {
    execSpecialFunction() {      
      switch(this.specialFunctionData.name) {
        
        case this.specialFunctionCards.HARVEST_MOON:
          this.shuffleDiscardsIntoDeck();
        break;

        default: break;
      }

      this.viewHand();
    },
    chooseCard(card) {
      const foundIndex = this.cardsFromDeck.findIndex(c => c.guid === card.guid);
      if (foundIndex !== -1) {
        this.cardsFromDeck.splice(foundIndex, 1);
        this.returnToDeck(this.cardsFromDeck);
        this.removeCard(card);
        if (this.specialFunctionData.name === this.specialFunctionCards.EYE_OF_HORUS) {
          this.shuffle();
          this.viewHand(); // should probably just call this.execSpecialFunction()
        }
        this.finished = true;
      }
    }
  }
}
</script>

<template>
  <div class="">
    <p>You have played</p>
    <h2>{{specialFunctionData.name}}</h2>
    <p>{{specialFunctionData.info}}</p>
    <button
      v-bind:class="{ 'disabled': !finished }"
      v-on:click="execSpecialFunction()">
      DONE
    </button>

    <CardList
      v-if="showCardList"
      v-bind:cards="cardsFromDeck"
      v-bind:removeCard="chooseCard">
    </CardList>
  </div>
</template>

<style scoped>
h1, h2 {
  font-weight: normal;
}

button {
  border: 2px solid rgb(83, 182, 215);
  padding: 5px 20px;
  font-size: 18px;
  cursor: pointer;
  color: rgb(83, 182, 215);
}
button:hover:not(.disabled) {
  background: rgb(83, 182, 215);
  color: white;
}
button.disabled {
  opacity: 0.2;
  cursor: default;
  pointer-events: none;
}
</style>

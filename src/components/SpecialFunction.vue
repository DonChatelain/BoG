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
      // finished: false || this.specialFunctionData.name === this.specialFunctionCards.HARVEST_MOON,
      showCardList: this.specialFunctionData.name !== this.specialFunctionCards.HARVEST_MOON, 
      cardsFromDeck: [],
      isCardChosen: false || this.specialFunctionData.name === this.specialFunctionCards.HARVEST_MOON,
    }
  },
  created() {
      window.scrollTo(0, 0);

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
      window.scrollTo(0, 0);
      this.viewHand();
    },
    chooseCard(card) {
      const foundIndex = this.cardsFromDeck.findIndex(c => c.guid === card.guid);
      if (foundIndex !== -1) {
        this.cardsFromDeck.splice(foundIndex, 1);
        this.returnToDeck(this.cardsFromDeck);
        this.removeCard(card);
        if (this.specialFunctionData.name === this.specialFunctionCards.EYE_OF_HORUS
          || this.specialFunctionData.name === this.specialFunctionCards.VALKYRIE_TOWER) {
          this.shuffle();
          this.viewHand(); // should probably just call this.execSpecialFunction()
          window.scrollTo(0,0);
        }
        this.isCardChosen = true;
      }
    }
  }
}
</script>

<template>
  <div class="">
    <span>You have played</span>
    <p>{{specialFunctionData.name}}</p>
    <p class="info">{{specialFunctionData.info}}</p>
    <button
      v-bind:class="{ 'disabled': !isCardChosen }"
      v-on:click="execSpecialFunction()">
      DONE
    </button>

    <CardList
      v-if="showCardList"
      v-bind:cards="cardsFromDeck"
      v-bind:removeCard="chooseCard"
      v-bind:isCardChosen="isCardChosen">
    </CardList>
  </div>
</template>

<style scoped>
h1, h2 {
  font-weight: normal;
}

span {
  font-size: 12px;
}

p {
  font-weight: bold;
  margin: 2px;
}

p.info {
  font-weight: normal;
  font-size: 14px;
  padding: 10px;
}

button {
  background: #4b134f;
  color: white;
  padding: 5px 20px;
  font-size: 18px;
  width: 90%;
  max-width: 270px;
  cursor: pointer;
  margin-bottom: 30px;
  border: none;
}

button.disabled {
  opacity: 0.2;
  cursor: default;
  pointer-events: none;
}
</style>

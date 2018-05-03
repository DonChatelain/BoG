 <script>
import Card from './Card.vue';

export default {
  name: 'CardList',
  components: {
    Card,
  },
  props: [
    'cards',
    'removeCard',
    'isCardChosen',
  ],
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<template>
  <div class="card-list">

    <Card
      v-for="card in cards"
      v-bind:cardData="card"
      v-bind:removeCard="removeCard"
      v-bind:key="card.guid"
      v-bind:isCardChosen="isCardChosen">
    </Card>
  </div>
</template>

<style scoped>
  .card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
  }

  .hand {
    margin-top: 30px;
  }
  section {
    height: 33px;
    margin: 20px auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

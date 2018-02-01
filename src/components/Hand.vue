 <script>
import Card from './Card.vue';

export default {
  name: 'Hand',
  components: {
    Card,
  },
  props: [
    'cards',
    'removeCard',
  ],
}
</script>

<template>
  <div class="hand">

    <section>
      <p>Cards in Hand: <strong>{{cards.length}}</strong></p>
    </section>

    <Card
      v-for="card in cards"
      v-bind:cardData="card"
      v-bind:removeCard="removeCard"
      v-bind:key="card.guid">
    </Card>
  </div>
</template>

<style scoped>
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

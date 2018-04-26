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
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<template>
  <div>
    <section>
      <span>Cards in Hand: <strong>{{cards.length}}</strong></span>
      <span class="help">Double-tap a card to play it</span>
    </section>
    
    <div class="hand">
      <Card
        v-for="card in cards"
        v-bind:cardData="card"
        v-bind:removeCard="removeCard"
        v-bind:key="card.guid">
      </Card>
    </div>
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  section span.help {
    font-size: 12px;
  }
</style>

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

  },
  created() {
    window.scrollTo(0, 0);
  }
}
</script>

<template>
  <div>
    <section>
      <span>Current Hand ({{cards.length}})</span>
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
    position: absolute;
    top: 100px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  section {
    height: 33px;
    margin: 3px auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  section span {
    font-size: 13px;
  }

  section span.help {
    font-size: 12px;
  }
</style>

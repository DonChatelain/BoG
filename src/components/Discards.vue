<script>
import Card from './Card.vue';

export default {
  name: 'Hand',
  components: {
    Card
  },
  props: [
    'cards',
    'removeCard',
  ],
}
</script>

<template>
  <div>
    <section>
      <span>Discard Pile ({{cards.length}})</span>
      <span class="help">Double-tap a card to return it to your hand</span>
    </section>
    <div class="discards">
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
h1, h2 {
  font-weight: normal;
}

section {
    margin: 3px auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

span {
  font-size: 13px;
}

span.help {
  font-size: 12px;
}

.discards {
  position: absolute;
  top: 100px;
      display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

button {
  border: 2px solid rgb(83, 182, 215);
  padding: 5px 20px;
  font-size: 18px;
  cursor: pointer;
  color: rgb(83, 182, 215);
}
button:hover {
  background: rgb(83, 182, 215);
  color: white;
}
</style>

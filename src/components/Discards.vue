<template>
  <div class="discards">
    <br>
    <br>
    <h2>Discard Pile</h2>
    <Card
      v-for="card in cards"
      v-bind:cardData="card"
      v-bind:removeCard="removeCard"
      v-bind:key="card.guid">
    </Card>

  </div>
</template>


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
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 20px;
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

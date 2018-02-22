<template>
  <div class="card">
    
    <h1>{{cardData.owner}}</h1>
    <h2>{{ cardData.name }}</h2>
    <p class="atk-def">{{cardData.atk}} / {{cardData.def}}</p>
    <p class="info">{{cardData.info}}</p>
    <div class="btn-container">
        <button
            v-on:click="removeCard(cardData)">
            X
        </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: [
      'cardData',
      'removeCard',
  ],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.card {
    width: 100%;
    min-height: 120px;
    border-bottom: 1px solid lightblue;
    text-align: left;
    position: relative;
}

h1, h2{
    padding: 5px;
    margin: 0;
    width: 80%;
}

h1 {
    font-size: 16px;
}
h2 {
    font-size: 18px;
}

p.atk-def {
    position: absolute;
    font-weight: bolder;
    font-size: 20px;
    top: -10px;
    right: 20px;
}

p.info {
    width: 80%;
    padding: 10px 0;
    margin: 0 10px;
}

.btn-container {
    padding: 10px;
    width: 15%;
    display: table-cell;
    vertical-align: top;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    align-items: center;

}
button {
    position: relative;
    width: 50px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;;
    color: #ff2b6f;
    font-weight: bolder;
    border: 1px solid #ff2b6f;
    cursor: pointer;
}
button:hover {
    background: #ff2b6f;
    color: white;
}
</style>

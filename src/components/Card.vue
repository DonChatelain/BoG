<script>
export default {
  name: 'Card',
  props: [
      'cardData',
      'removeCard',
      'isCardChosen',
  ],
  data () {
    return {
        disabled: false,
    }
  },
  methods: {
      onTap() {
          this.$el.style.left = '400px';
          this.$el.style.opacity = 0;
          setTimeout(() => this.removeCard(this.cardData), 500);
      }
  }
}
</script>

<template>
  <div class="card"
    v-bind:class="{ disabled: this.isCardChosen === true }"
    v-on:dblclick="onTap"
    v-touch:swipe.right="onTap"
    v-touch:longtap="onTap">

    <h1>{{cardData.owner}}</h1>
    <div class="name-and-numbers">
        <h2>{{ cardData.name }}</h2>
        <p class="atk-def">{{cardData.atk}} / {{cardData.def}}</p>
    </div>
    <p class="info">{{cardData.info}}</p>

  </div>
</template>

<style scoped>
.card {
    color: #000;
    width: 100%;
    min-height: 120px;
    background: #f3eeef;
    border-bottom: 1px solid #d4d4d4;
    border-left: 1px solid #d4d4d4;
    border-right: 1px solid #d4d4d4;
    text-align: left;
    position: relative;
    box-sizing: border-box;
    left: 0;
    top: 0;
    opacity: 1;
    transition: left 500ms, opacity 300ms;
    transform: translateZ(0); /* enables HW acceleration */
    box-shadow: rgba(0,0,0,0.5) 10px 13px 11px 0px
}

@media screen and (min-width: 700px) {
    .card {
        width: 45%;
        margin: 2%;
    }
}

@media screen and (min-width: 1076px) {
    .card {
        width: 30%;
        margin: 1%;
    }
}

.card:first-child {
    border-top: 1px solid #d4d4d4;    
}

.name-and-numbers {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
}

.card.disabled {
    opacity: 0.8;
    pointer-events: none;
}

h1, h2{
    padding: 5px 10px;
    margin: 0;
}

h1 {
    font-size: 16px;
    font-weight: normal;
    max-width: 100%;
}
h2 {
    font-size: 18px;
    font-weight: bold;
    max-width: 80%;
}

p.atk-def {
    font-weight: bolder;
    font-size: 20px;
    padding-right: 15px;
}

p.info {
    width: 75%;
    padding: 10px 0;
    margin: 0 10px;
}

.btn-container {
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
    height: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;;
    color: #ff2b6f;
    font-weight: bolder;
    /* border: 1px solid #ff2b6f; */
    cursor: pointer;
    opacity: 0.5;
    border: none;
    font-size: 22px;
    /* padding: 17px 0; */
    margin: 25px 0;
}
button:hover {
    background: #ff2b6f;
    color: white;
}
</style>

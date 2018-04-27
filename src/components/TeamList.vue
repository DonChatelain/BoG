<script>

export default {
  name: 'TeamList',
  components: {
  },
  props: [
    'teams',
    'hideList',
  ],
  computed: {
      teamList() {
          if (Object.keys(this.teams).length & 2 !== 0) {
              this.teams['placeholder'] = {name: 'Mesoamerican Placeholder'};
          }
          return this.teams;
      }
  },
  data() {
     return {
     } 
  },
  methods: {

  }
}
</script>

<template>
  <div class="main">
      <h3>TEAM LIST</h3>
      <button class="button-topleft"
        v-on:click="hideList">
        Back
      </button>
      <div class="team-list">
        <li
            v-for="team in teamList"
            v-bind:key="team.name">
            <p>{{team.name}}</p>
            <p class="card-count">Card Count: {{team.cardCount}}</p>
            <div class="icon-container">
                <p><img class="icon" src="static/heart.png" /> {{team.health}}</p>
                <p><img class="icon" src="static/attack.png" /> {{team.totalAtk}}</p>
                <p><img class="icon" src="static/defense.png" /> {{team.totalDef}}</p>
            </div>
        </li>
      </div>
  </div>
</template>

<style scoped>

    .main {
        width: 100%;
        height: 100vh;
    }

    h3 {
        margin: 50px 0;
    }

    .card-count {
        font-size: 10px;
    }



    .icon {
        width: 20px;
        vertical-align: bottom;
    }
    
    .team-list {
        margin: 0 auto;
        display: flex;
        width: 100%;
        justify-content: center;
        align-content: start;
        flex-wrap: wrap;
    }
    
    li {
        list-style: none;
        width: 50%;
        border: 1px solid rgb(230, 230, 230);
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #fff;
        color: #000;
    }

    .icon-container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 30px;
    }
</style>

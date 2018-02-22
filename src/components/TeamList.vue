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

  },
  data() {
     return {
         teamList: this.teams,
     } 
  },
  methods: {

  }
}
</script>

<template>
  <div>
      <h3>TEAM LIST</h3>
      <button
        v-on:click="hideList">
        Back
      </button>
      <div class="team-list">
        <li
            v-for="team in teamList"
            v-bind:key="team.name">
            <p>{{team.name}}</p>
            <p class="card-count">Card Count: {{team.cardCount}}</p>
            <p><img class="icon" src="static/heart.png" /> {{team.health}}</p>
            <p><img class="icon" src="static/attack.png" /> {{team.totalAtk}}</p>
            <p><img class="icon" src="static/defense.png" /> {{team.totalDef}}</p>
        </li>
      </div>
  </div>
</template>

<style scoped>
    div {
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        height: 100vh;
        background: white;
    }

    .card-count {
        font-size: 10px;
    }

    button {
        position: relative;
        top: -43px;
        left: -100px;
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
        width: 220px;
        height: 220px;
        border: 1px solid rgb(230, 230, 230);
        padding: 10px;
    }
</style>

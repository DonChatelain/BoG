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
          console.log(this.teams['Quetzalcoatl & Serpent Priest'])
        //   if (Object.keys(this.teams).length % 2 !== 0) {
        //       this.teams['placeholder'] = {name: 'Mesoamerican Placeholder'};
        //   }
          return this.teams;
      }
  },
  data() {
     return {
         
     } 
  },
  methods: {
      getPrimaryChar(teamName) {
          const team = this.teams[teamName];
          if (team && team.characters) {
              return `${team.characters[0].name} - <img class="icon" src="static/heart.png" /> ${team.characters[0].health}`;
          } else return teamName;
      },
        getSecondaryChar(teamName) {
            const team = this.teams[teamName];
            if (team && team.characters) {
                return `${team.characters[1].name} - ${team.characters[1].health} health`;
            } else return '';
        }
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
            <span>{{ team.characters[0].name }} - <img class="" src="static/heart.png" />  {{ team.characters[0].health }}</span>
            <span>{{ team.characters[1].name }} - <img class="" src="static/heart.png" />  {{ team.characters[1].health }}</span>
            <p></p>
            <span class="card-count">Card Count: {{team.cardCount}}</span>
            <div class="icon-container">
                <!-- <p><img class="icon" src="static/heart.png" /> {{team.health}}</p> -->
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

    li p {
        margin: 5px;
    }

    li span:nth-child(1) {
        font-weight: bold;
    }

    li span:nth-child(2) {
        font-size: 13px;
    }

    li span img {
        width: 15px;
        vertical-align: sub;
    }

    .icon-container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 30px;
    }
</style>

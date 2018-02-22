<script>
import TeamList from './TeamList';

export default {
  name: 'GodInfo',
  components: {
    TeamList,
  },
  props: [
    'characters',
    'setupDeck',
    'teamName',
    'currentTeamData',
    'viewHand',
  ],
  computed: {
  },
  data() {
    return {
      teams: Object.keys(this.characters),
      selectedTeamName: this.teamName,
      init: (this.teamName !== 'default'),
      showTeamList: false,
    }
  },
  methods: {
    selectTeam(event) {
      this.setupDeck(event.target.value);
      this.viewHand();
    },
    hideList() {
      this.showTeamList = false;
    }
  }
}
</script>

<template>
  <div class="god-info">

    <section>
      <h2>Select your Team</h2>
      <select
        v-model="selectedTeamName"
        v-on:change="selectTeam">
          <option disabled value="default">Choose your Team</option>
          <option v-for="team in teams"
              v-bind:key="team"
              v-bind:value="team">
              {{ team }}
          </option>
      </select>

      <!-- <div class="info"
        v-if="init">
        <p>Team Totals:</p>
        <p>Health: {{currentTeamData.health}}</p>
        <p>Special Card Count: {{currentTeamData.cardCount}}</p>
        <p>Attack Power: {{currentTeamData.totalAtk}}</p>
        <p>Defense Power: {{currentTeamData.totalDef}}</p>
      </div> -->


    </section>

    <div class="view-team-list-btn"
      v-on:click="showTeamList = true">
      All Teams
    </div>

    <TeamList
      v-if="showTeamList"
      v-bind:hideList="hideList"
      v-bind:teams="characters">
    </TeamList>

  </div>
</template>

<style scoped>
h1, h2 {
  font-weight: normal;
  /* font-size: 20px; */
}

button {
  padding: 5px;
  background: transparent;
  left: 20px;
  cursor: pointer;
}

section {
  background: white;
  width: 100%;
}

.view-team-list-btn {
  cursor: pointer;
  width: 100px;
  height: 50px;
  margin: 50px auto;
  background: white;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

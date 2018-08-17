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
    'viewInfo',
    'viewTeamList',
  ],
  computed: {
    teams() { return Object.keys(this.characters) }
  },
  data() {
    return {
      // teams: Object.keys(this.characters),
      selectedTeamName: this.teamName,
      init: (this.teamName !== 'default'),
      showingTeamList: false,
    }
  },
  methods: {
    selectTeam(event) {
      this.setupDeck(event.target.value);
      this.viewHand();
    },
    hideList() {
      this.showingTeamList = false;
      this.viewInfo();
    },
    showTeamList() {
      this.showingTeamList = true;
      this.viewTeamList();
    }
  }
}
</script>

<template>
  <div class="god-info">

    <section
      v-if="!showingTeamList">
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

    <button class="button-topright"
      v-if="!showingTeamList"
      v-on:click="showTeamList()">
      All Teams
    </button>

    <TeamList
      v-if="showingTeamList"
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

section {
  width: 100%;
}

select {
  -webkit-appearance: none;
  height: 35px;
  width: 250px;
  font-size: 0.9em;
  padding: 0 7px;
  border-radius: 0;
}

</style>

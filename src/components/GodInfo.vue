<script>

export default {
  name: 'GodInfo',
  components: {
  },
  props: [
    'characters',
    'setupDeck',
    'teamName',
    'viewHand',
  ],
  computed: {
  },
  data() {
    return {
      teams: Object.keys(this.characters)
        .map(x => this.characters[x].team),
      selectedTeamName: this.teamName,
    }
  },
  methods: {
    selectTeam(event) {
      this.setupDeck(event.target.value);
      this.viewHand();
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

      <div class="info">

      </div>
    </section>

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
</style>

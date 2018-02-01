<template>
  <div class="god-info">
    <button 
      v-on:click="toggleDisplayPanel"
      class="">
      {{teamName}}
    </button>

    <section
      v-if="showPanel === true">

      <button
        v-if="init"
        v-on:click="toggleDisplayPanel"
        class="close">
        Back
      </button>

      <select
        v-model="teamName"
        v-on:change="selectTeam">
          <option disabled value="">Choose your Team</option>
          <option v-for="team in teams"
              v-bind:key="team"
              v-bind:value="team">
              {{ team }}
          </option>
      </select>

      <div class="info"
        v-if="init">
        <p>Primary: {{teamData.name}}</p>
        <p>Total Health: {{teamData.health}}</p>
        <p>Supporting: {{supportingCharList}}</p>
      </div>
    </section>

  </div>
</template>


<script>

export default {
  name: 'GodInfo',
  components: {
  },
  props: [
    'characters',
    'setupDeck'
  ],
  computed: {
    supportingCharList() {
      if (!this.teamData || !this.teamData.support) return [];
      // console.log(this.teamData)
      return this.teamData.support.map(x => x.name);
    },
    teamData() {
      let result = {};
      Object.keys(this.characters).forEach(x => {
        if (this.teamName === this.characters[x].team){
          result = this.characters[x];
        }
      });
      return result;
    }
  },
  data() {
    return {
      init: false,
      showPanel: true,
      teamName: '',
      teams: Object.keys(this.characters)
        .map(x => this.characters[x].team),
    }
  },
  methods: {
    toggleDisplayPanel() {
      this.showPanel = !this.showPanel;
    },
    selectTeam(event) {
      this.setupDeck(this.teamData);

      this.init = true;
      this.teamName = event.target.value;
      this.toggleDisplayPanel();
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 20px;
}

button {
  padding: 5px;
  background: transparent;
  position: absolute;
  left: 20px;
  cursor: pointer;
}
button:hover {

}

section {
  background: white;
  position: absolute;
  top: 80px;
  left: 0;
  width: 500px;
  height: 200vh;
  
  z-index: 100;
}
</style>

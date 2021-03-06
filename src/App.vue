<script>
import Hand from './components/Hand';
import Discards from './components/Discards';
import GodInfo from './components/GodInfo';
import SpecialFunction from './components/SpecialFunction';

import { buildDeck, shuffle } from './deckBuilder';
import ServiceWorker from './ServiceWorker.js';

const STARTING_CARD_COUNT = 4;
const MAX_CARDS_IN_HAND = 10;

// MUST BE UPDATED IF ANY OF THESE CARD NAMES CHANGE
const SPECIAL_FUNCTION_CARDS = {
  DIVINE_SIGHT: 'Divine Sight',
  VALKYRIE_TOWER: 'Valkyrie Tower',
  HARVEST_MOON: 'Harvest Moon',
  ANIMAL_SACRIFICE: 'Animal Sacrifice',
  SHAPESHIFTING: 'Shapeshifting',
}

const POTENTIAL_GAME_NAMES = [
  'Battle of Gods',
  'Immortal Fire',
  'Immortal Tournament',
  'Immortal Battlezone',
  'Immortal Battlefield',
  'Battleground Divinus',
  'Tournament of Nyx',
  'Game of Nyx',
  'Tournament Eternal'
];

const VIEW = {
  HAND: 0,
  INFO: 1,
  DISCARD: 2,
  TEAM_LIST: 3,
  FUNCTION: 4,
};

// window.onbeforeunload = confirmNavigateAway;
// window.onpagehide = confirmNavigateAway;
function confirmNavigateAway (e) {
  const dialogText = 'All data will be lost';
  e.returnValue = dialogText;
  return dialogText;
}

export default {
  name: 'App',
  components: {
    Hand,
    Discards,
    GodInfo,
    SpecialFunction,
  },
  created() {
    ServiceWorker
      .fetchAndCompileAllData()
      .then(result => this.teamData = result)
      .catch(err => console.error('fetch error:', err));
  },
  data() { 
    return {
      teamName: 'default',
      deck: [],
      cards: [],
      discardPile: [],
      showDiscardPile: false,
      teamData: {},
      showInfoPanel: true,
      isHoverDrawPile: false,
      drawPileText: 'DRAW CARD',
      VIEW,
      currentView: VIEW.INFO,
      initialized: false,
      specialFunctionData: {},
      specialFunctionCards: SPECIAL_FUNCTION_CARDS,
    }
  },
  computed: {
    getView() {
      return this.currentView;
    },
    randomizeGameName() {
      return POTENTIAL_GAME_NAMES[Math.floor(Math.random() * (POTENTIAL_GAME_NAMES.length))];
    }
  },
  methods: {
    setupDeck(teamName){
      const team = this.getTeamByName(teamName);
      if (!team) return console.log('Failed to getTeamByName', teamName);
      this.initialized = true;
      this.teamName = teamName;
      this.deck = buildDeck(team);
      this.cards = this.deck.splice(0, STARTING_CARD_COUNT);
      this.resetDiscards();
    },
    drawCard() {
      if (this.deck.length > 0) {
        if (this.cards.length >= MAX_CARDS_IN_HAND) {
          return alert('Max Card Limit Reached- Discard a card to draw another');
        }
        this.cards.unshift(this.deck.shift());
      }
    },
    removeCard(card) {
      if (this.currentView === VIEW.DISCARD) {
        const foundIndex = this.discardPile.findIndex(c => c.guid === card.guid);
        if (foundIndex != -1) {
          this.cards.unshift(card);
          this.discardPile.splice(foundIndex, 1);
        }
      } else if (this.currentView === VIEW.HAND) {
        const foundIndex = this.cards.findIndex(c => c.guid === card.guid);
        if (foundIndex != -1) {
          this.execSpecialFunction(card.name);
          this.discardPile.unshift(card);
          this.cards.splice(foundIndex, 1);
        }
      } else if (this.currentView === VIEW.FUNCTION) {
        this.cards.unshift(card);
      }
    },
    viewDiscard() {
      this.currentView = VIEW.DISCARD;
    },
    viewDiscardText() {
      if (this.currentView === VIEW.DISCARD) {
        return 'Return to Hand';
      } 
      return 'Discard Pile';
    },
    viewHand() {
      this.currentView = VIEW.HAND;
    },
    viewTeamList() {
      this.currentView = VIEW.TEAM_LIST;
    },
    viewFunction() {
      this.currentView = VIEW.FUNCTION;
    },
    viewInfo() {
      this.currentView = VIEW.INFO;
    },
    viewInfoText() {
      if (this.currentView === VIEW.INFO) {
        return 'Return to Hand';
      }
      return 'Reselect Team';
    },
    resetDiscards() {
      this.discardPile = [];
    },
    getTeamByName(name) {
      return this.teamData[name];
    },
    // TODO move this logic to special function component
    execSpecialFunction(cardName) {
      switch(cardName) {
        case SPECIAL_FUNCTION_CARDS.DIVINE_SIGHT:
          // choose 1 card from deck and move into hand, and reshuffle deck
          this.specialFunctionData = {
            name: cardName,
            info: 'Choose one card from your deck to place into your hand; Your deck will then be reshuffled',
          };
        break;
        case SPECIAL_FUNCTION_CARDS.VALKYRIE_TOWER: 
          // look at top 5 from deck, move 1 into hand and reshuffle deck
          this.specialFunctionData = {
            name: cardName,
            info: 'View the top 5 cards from your deck and double-tap one to place into your hand; Your deck will then be reshuffled'
          };
        break;
        case SPECIAL_FUNCTION_CARDS.HARVEST_MOON: 
          // shuffle discards into deck
          this.specialFunctionData = {
            name: cardName,
            info: 'Search through your discard pile and place one card into your hand'
          };
        break;
        case SPECIAL_FUNCTION_CARDS.ANIMAL_SACRIFICE: 
          // look at top 4 from deck, move 1 into hand, place other 3 back on top of draw pile in desired order
          this.specialFunctionData = {
            name: cardName,
            info: 'View the top 4 cards from your deck; double-tap one to place it into your hand; The remaining 3 cards will be placed on top of your draw pile bottom-first (i.e. the card on top here will be the next card you draw)'
          }
        break;
        case SPECIAL_FUNCTION_CARDS.SHAPESHIFTING:
          // Steal an opponent's basic card- not easy to implement here, so just explain what to do
          this.specialFunctionData = {
            name: cardName,
            info: 'Steal an opponent\'s card. Simply write down the card values and play it like your own. Does not need to be played immediately'
          }
        break;
        default:
          this.specialFunctionData = {};
          break;
      }
      if (this.specialFunctionData.name != null) {
        this.viewFunction();
      }
    },
    returnToDeck(cards) {
      this.deck = cards.concat(this.deck);
    },
    returnToDiscards(cards) {
      this.discardPile = cards;
    },
    shuffle() {
      this.deck = shuffle(this.deck);
    }
  }
}
</script>

<template>
  <div id="app"
    v-on:click="preventZoom">
    <header>

      <button 
        v-show="initialized && getView === VIEW.HAND || getView === VIEW.INFO"
        v-bind:class="{ 'hidden': getView === VIEW.DISCARD || !initialized}"
        v-on:click="getView === VIEW.HAND ? viewInfo() : viewHand()">
        {{viewInfoText()}}
      </button>

      <div class="drawpile"
        v-on:click="drawCard"
        v-show="initialized"
        v-bind:class="{ 'hover-drawpile': isHoverDrawPile, 'hidden': getView !== VIEW.HAND }">
        <h1>
          {{drawPileText}}
        </h1>
        <h2>
           ( {{deck.length}} )
        </h2>
      </div>

      <button
        v-show="initialized && getView !== VIEW.FUNCTION"
        v-bind:class="{ 'hidden': getView === VIEW.INFO }"
        v-on:click="getView === VIEW.HAND ? viewDiscard() : viewHand()">
        {{viewDiscardText()}}
      </button>
    </header>

    <h1
      class="main-title"
      v-if="getView === VIEW.INFO"
      style="width: 100%;">
      {{randomizeGameName}}
    </h1>
    
    <Hand
      v-if="getView === VIEW.HAND"
      v-bind:cards="cards"
      v-bind:drawCard="drawCard"
      v-bind:removeCard="removeCard">
    </Hand>

    <GodInfo
      v-if="getView === VIEW.INFO || getView === VIEW.TEAM_LIST"
      v-bind:characters="teamData"
      v-bind:setupDeck="setupDeck"
      v-bind:viewHand="viewHand"
      v-bind:viewTeamList="viewTeamList"
      v-bind:viewInfo="viewInfo"
      v-bind:teamName="teamName"
      v-bind:currentTeamData="getTeamByName(teamName)">
    </GodInfo>

    <Discards
      v-if="getView === VIEW.DISCARD"
      v-bind:cards="discardPile"
      v-bind:removeCard="removeCard">
    </Discards>

    <SpecialFunction
      v-if="getView === VIEW.FUNCTION"
      v-bind:specialFunctionData="specialFunctionData"
      v-bind:specialFunctionCards="specialFunctionCards"
      v-bind:viewHand="viewHand"
      v-bind:discardPile="discardPile"
      v-bind:deck="deck"
      v-bind:removeCard="removeCard"
      v-bind:returnToDeck="returnToDeck"
      v-bind:returnToDiscards="returnToDiscards"
      v-bind:shuffle="shuffle">
    </SpecialFunction>
    
  </div>
</template>

<style>

html {
  background: -webkit-linear-gradient(116deg, #c94b4b, #4b134f);
  background: linear-gradient(116deg, #c94b4b, #4b134f);
}

body {
  /* background: -webkit-linear-gradient(116deg, #c94b4b, #4b134f);
  background: linear-gradient(116deg, #c94b4b, #4b134f); */
  
  /* background: -webkit-linear-gradient(106deg, #A8CABA, #5D4157);  
  background: linear-gradient(106deg, #A8CABA, #5D4157);  */

  min-height: 100vh;
}

body {
  margin: 0;
  overflow-x: hidden;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
}

h1.main-title {
  margin: 100px auto 50px auto;
 
  text-shadow: #4b134f 3px 3px 0px, #4b134f 4px 4px 0px, #4b134f 5px 5px 0px, #4b134f 6px 6px 0px, #4b134f 7px 7px 0px, #4b134f 8px 8px 0px, #4b134f 9px 9px 0px, #4b134f 10px 10px 0px, #4b134f 11px 11px 0px, #4b134f 12px 12px 0px, #4b134f 13px 13px 0px, #4b134f 14px 14px 0px;
}

.hidden {
  visibility: hidden;
}

header {
  display: flex;
  justify-content: space-between;
}

div.drawpile {
  width: 150px;
  height: 60px;
  padding: 0px 0;
  cursor: pointer;
  border: 1px solid rgb(237, 237, 237);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 0 0 1px 0 rgb(197, 197, 197);
  transition: box-shadow 200ms;
  user-select: none;
  box-sizing: border-box;
  background: rgba(0,0,0,0.1);
}

.hover-drawpile {
  box-shadow: 0 0 3px 0 rgb(197, 197, 197) !important;
}

.drawpile h1 {
  margin: 0;
  padding: 0;
  font-size: 16px;
}

.drawpile h2 {
  font-size: 12px;
  margin: 0;
  padding: 0;
}

header button {
  width: 80px;
  height: 60px;
  border: 1px solid #ffdcdc; 
  box-shadow: 0 0 1px 0 rgb(197, 197, 197);
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
  font-size: 15px;
  background: rgba(0,0,0,0.1);
  padding: 2px;
}

.button-topright {
  width: 80px;
  height: 60px;
  background: rgba(0,0,0,0.1);
  border: 1px solid #ffdcdc;
  box-shadow: 0 0 1px 0 rgb(197, 197, 197);
  position: absolute;
  color: #fff;
  top: 0;
  right: 0;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
  font-size: 15px !important;
  padding: 2px;
}

.button-topleft {
  width: 80px;
  height: 60px;
  background: rgba(0,0,0,0.1);
  border: 1px solid #ffdcdc;
  box-shadow: 0 0 1px 0 rgb(197, 197, 197);
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
  padding: 2px;
}

button {
  font-family: 'Avenir';
  font-weight: bold;
  background: transparent;
  cursor: pointer;
  /* opacity: 0.7; */
  user-select: none;

}
button:hover {
  opacity: 1;
}
button:focus {
  outline: 0;
}

</style>

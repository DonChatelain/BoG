import axios from 'axios';

import config from './config.js';

const { API_TOKEN, API_URL } = config;

class ServiceWorker {
  constructor() {
    axios.interceptors.request.use(axiosConfig => {
      axiosConfig.headers['Authorization'] = API_TOKEN;
      return axiosConfig;
    });
  }

  fetchAndCompileAllData() {
    return new Promise((resolve, reject) => {
      Promise.all([
        this.fetchTeams(),
        this.fetchCharacters(),
        this.fetchSpCards(),
        this.fetchBscards(),
      ])
      .then(pResult => {
        const teamData = {};
        const [ teams, chars, spCards, bsCards ] = pResult;

        teams.forEach(team => {
          teamData[team.name] = {
            name: team.name,
            deckClass: team.deckClass,
            teamKey: team.key,
            characters: [],
            cards: [],
          } 
        });

        Object.values(teamData).forEach(team => {
          // push characters
          chars.forEach(char => {
            if (team.teamKey === char.team) {
              team.characters.push({
                name: char.name,
                health: char.health,
                minorCount: char.minorCount,
              });
            }
          })
          // push sp cards
          spCards.forEach(cardTemplate => {
            if (team.characters.find(c => c.name === cardTemplate.owner)) {
              for (let i = 0; i < cardTemplate.qty; i++) {
                team.cards.push(cardTemplate);
              }
            }
          })
          // push basic cards
          bsCards.forEach(cardClass => {
            if (team.deckClass === cardClass.colorClass) {
              cardClass.cards.forEach(cardTemplate => {
                for (let i = 0; i < cardTemplate.qty; i++) {
                  if (cardTemplate.rng) cardTemplate.effect = 'Ranged';
                  team.cards.push(cardTemplate);
                }
              })
            }
          })
        }); 
        // end
        resolve(teamData);
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
    });
  }

  fetchBscards() {
    return Promise.all([
      this.fetch('basiccardclasses/RED'),
      this.fetch('basiccardclasses/BLUE'),
      this.fetch('basiccardclasses/GREEN'),
    ]);
  }
  fetchSpCards() {
    return this.fetch('specialcards?limit=100');
  }
  fetchTeams() {
    return this.fetch('teams');
  }
  fetchCharacters() {
    return this.fetch('characters');
  }
  /**
   * Returns Promise
   */
  fetch(endpoint) {
    return new Promise((resolve, reject) => {
      axios
        .get(API_URL + '/' + endpoint)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => reject(err));
    })
  }

}

export default new ServiceWorker();
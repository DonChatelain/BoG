webpackJsonp([1],{"/Thj":function(e,a){e.exports={RED:[{atk:5,def:1,qty:4},{atk:4,def:1,qty:1},{atk:4,def:2,qty:2},{atk:3,def:2,qty:1},{atk:2,def:3,qty:1},{atk:1,def:4,qty:1}],MAGENTA:[{atk:5,def:1,qty:3},{atk:4,def:1,qty:1},{atk:4,def:2,qty:2},{atk:3,def:3,qty:1},{atk:2,def:3,qty:2},{atk:1,def:4,qty:1}],BLUE:[{atk:5,def:1,qty:2},{atk:4,def:1,qty:1},{atk:4,def:2,qty:2},{atk:3,def:3,qty:2},{atk:2,def:3,qty:1},{atk:1,def:4,qty:2}],CYAN:[{atk:5,def:1,qty:1},{atk:4,def:2,qty:3},{atk:3,def:3,qty:2},{atk:2,def:3,qty:1},{atk:2,def:4,qty:2},{atk:1,def:4,qty:1}],GREEN:[{atk:4,def:2,qty:4},{atk:3,def:3,qty:2},{atk:2,def:4,qty:2},{atk:1,def:4,qty:1},{atk:1,def:5,qty:1}],BROWN:[{atk:5,def:1,qty:1},{atk:4,def:1,qty:2},{atk:4,def:2,qty:2},{atk:3,def:2,qty:1},{atk:2,def:3,qty:2},{atk:1,def:4,qty:2}],AQUA:[{atk:4,def:1,qty:1},{atk:4,def:2,qty:3},{atk:3,def:3,qty:2},{atk:2,def:3,qty:1},{atk:2,def:4,qty:1},{atk:1,def:4,qty:2}],MINOR_STRONG:[{atk:5,def:1,qty:1},{atk:4,def:2,qty:2},{atk:3,def:2,qty:1},{atk:3,def:3,qty:2},{atk:2,def:3,qty:1},{atk:1,def:4,qty:2}],MINOR_WEAK:[{atk:3,def:1,qty:2},{atk:3,def:2,qty:2},{atk:2,def:2,qty:3},{atk:1,def:3,qty:2}]}},"/vS2":function(e,a){},"3Ytr":function(e,a,t){var n=t("/Thj");e.exports={name:"Loki",faction:"Norse",team:"Loki & Fenrir + Jormungand",health:10,class:n.GREEN,specials:[{name:"Shapeshifting",qty:3,atk:0,info:"Ranged : This card will allow Loki to blindly pull any characters card from their hand and use that card"},{name:"Shieldr",qty:2,info:"AoE : 1 Turn : This will protect Loki during one round of turns"},{name:"Teleport",qty:2,info:"TLoki can use this card to pick a spot on the map to teleport but this will use up all actions"},{name:"Trickster",qty:2,info:"Can steal a players health. A player with more health will switch health with Loki"}],transformations:[{form:"King of the Giants",effect:"Loki can move double of his roll and attacks are double"}],support:[{name:"Fenrir",health:13,class:n.MINOR_STRONG,specials:[{name:"Fenrir Chaos",qty:2,info:"AoE : Can add an additional action- does not take up an action"},{name:"Fenrir Pack",qty:2,info:"Can shapeshift into a pack of 3 wolves and moves separately around the board. The health is divided between all 3. Attack strength remains the same."},{name:"Fenrir Strength",qty:3,atk:7,info:"Ranged : Fenrir uses massive jaws to bit an enemy up to two spaces away."},{name:"Fenrir Slash",qty:2,atk:5,info:"Melee :  Slashes an enemy. "}]},{name:"Jormungand",health:15,class:n.MINOR_STRONG,specials:[{name:"Jormungand Protection",qty:2,info:"AoE : Has an energy protection can be used during an attack"},{name:"Jormungand Block",qty:2,info:"Ranged - The Serpent uses its long body to block players from advancing. This can be used anytime."},{name:"Jormungand Materialize",qty:3,atk:7,info:"Ranged : Can move to any spot on the board and force combat with any character."},{name:"Jormungand Crush",qty:2,atk:10,info:"Melee :  Crushes an enemy. "}]}]}},"9uFc":function(e,a){},H6pD:function(e,a,t){var n=t("/Thj");e.exports={name:"Hel",faction:"Norse",health:14,team:"Hel & Nighogg",class:n.GREEN,specials:[{name:"Ragnarok",qty:2,atk:8,info:"Ranged : All Army of the dead may rise again at full health. This does not count as an action. Nidhogg can be moved to any spot on the map"},{name:"Swallowing of the Sun & Moon",qty:2,info:"AoE : Pick one player to discard a card at random and skip their turn"},{name:"Fimbulwinter",qty:2,info:"This card can be played anytime. A harsh cold winter will stop a foe in their tracks. "},{name:"Corpse Fence",qty:2,info:"Hel conjures a fence of dead corpses. Any character in an adjacent square lose 1 health."}],transformations:[{form:"Invulnerability",effect:"Hel is protected during one round"}],support:[{name:"Nidhogg",health:20,class:n.MINOR_STRONG,specials:[{name:"Stay dead",qty:2,info:"Discard an AOTD character to give Hel or Nidhogg health"},{name:"Revenge on the Gods",qty:2,info:"AOTD can attack an enemy dealing damage based on a roll"},{name:"Never ending Hunger",qty:3,atk:10,info:"Any player that is adjacent to the player that is attacked, will also be given X amount of damage. "},{name:"flame broiled",qty:4,atk:5,info:"Melee :  ranged, high damage"},{name:"Prolonged death",qty:3,atk:5,info:"Venom action card that does 3 damage and allows Nidhogg to run away by 3 spaces. This venom card does 1 damage until the victim rolls a 3."}]}]}},HYw4:function(e,a){},KYwo:function(e,a,t){var n=t("/Thj");e.exports={name:"Odin",faction:"Norse",health:15,team:"Odin & Thor",class:n.BLUE,specials:[{name:"Gungnir & Mjolnir",qty:2,atk:10,info:"Ranged : This card will do damage based on positions of enemies. 1 space from Thor deals 3 damage, 2 space deals 2 damage, 3 or more deals 1 damage. All other characters will take at least 1 damage."},{name:"Huginn & Muninn",qty:3,info:"AoE :  Odin’s ravens can look at an opponent's hand with less health than Odin and discard 1 card"},{name:"Sleipnir",qty:2,info:"Was Odin’s 8 legged horse, this will allow Odin to move an additional X spaces and jump over obstacles"},{name:"Valkyrie Tower",qty:2,info:"Search through the top 5 card and pick (1) card - put the rest back into your deck and reshuffle"}],transformations:[{form:"Raven",effect:"Remove an action from each character for two rounds"}],support:[{name:"Thor",health:18,class:n.MINOR_STRONG,specials:[{name:"Sanctification",qty:2,info:"AoE : 1 radius : The power of healing. This card can give Thor 1 health and Odin 2 health."},{name:"Jarnglofar",qty:2,info:"Draw 2 cards; The belt that Thor wears, this can double his attack & healing power once per-turn."},{name:"Mjolnir lightning",qty:3,atk:7,info:"Ranged : Players with in 2 space of Thor will be dealt 2 damage"},{name:"Mjolnir",qty:3,atk:5,info:"Melee :  Throw attack or block, Thor can throw Mjolnir to attack a foe or Place Mjolnir in a space blocking that player from moving there."},{name:"Heimdall",qty:1,info:"AoE: 3 radius : Is the watcher of the nine realms and gatekeeper of Asgard. This card will allow Thor to move anywhere on the board."}]}]}},NHnr:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("7+uW"),i=t("fZjL"),r=t.n(i),o={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"card"},[t("h1",[e._v(e._s(e.cardData.character))]),e._v(" "),t("h2",[e._v(e._s(e.cardData.name))]),e._v(" "),t("p",{staticClass:"atk-def"},[e._v(e._s(e.cardData.atk)+" / "+e._s(e.cardData.def))]),e._v(" "),t("p",{staticClass:"info"},[e._v(e._s(e.cardData.info))]),e._v(" "),t("div",{staticClass:"btn-container"},[t("button",{on:{click:function(a){e.removeCard(e.cardData)}}},[e._v("\n          X\n      ")])])])},staticRenderFns:[]};var s=t("VU/8")({name:"Card",props:["cardData","removeCard"],data:function(){return{}}},o,!1,function(e){t("/vS2")},"data-v-4c6602a9",null).exports,d={name:"Hand",components:{Card:s},props:["cards","removeCard"]},c={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"hand"},[t("section",[t("p",[e._v("Cards in Hand: "),t("strong",[e._v(e._s(e.cards.length))])])]),e._v(" "),e._l(e.cards,function(a){return t("Card",{key:a.guid,attrs:{cardData:a,removeCard:e.removeCard}})})],2)},staticRenderFns:[]};var l=t("VU/8")(d,c,!1,function(e){t("d6Dt")},"data-v-1f18fe35",null).exports,f={name:"Hand",components:{Card:s},props:["cards","removeCard"]},h={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"discards"},[t("h2",[e._v("Discard Pile")]),e._v(" "),e._l(e.cards,function(a){return t("Card",{key:a.guid,attrs:{cardData:a,removeCard:e.removeCard}})})],2)},staticRenderFns:[]};var u=t("VU/8")(f,h,!1,function(e){t("HYw4")},"data-v-78c9679d",null).exports,m={name:"GodInfo",components:{},props:["characters","setupDeck","teamName","viewHand"],computed:{},data:function(){var e=this;return{teams:r()(this.characters).map(function(a){return e.characters[a].team}),selectedTeamName:this.teamName}},methods:{selectTeam:function(e){this.setupDeck(e.target.value),this.viewHand()}}},p={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"god-info"},[t("section",[t("h2",[e._v("Select your Team")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedTeamName,expression:"selectedTeamName"}],on:{change:[function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedTeamName=a.target.multiple?t:t[0]},e.selectTeam]}},[t("option",{attrs:{disabled:"",value:"default"}},[e._v("Choose your Team")]),e._v(" "),e._l(e.teams,function(a){return t("option",{key:a,domProps:{value:a}},[e._v("\n              "+e._s(a)+"\n          ")])})],2),e._v(" "),t("div",{staticClass:"info"})])])},staticRenderFns:[]};var v=t("VU/8")(m,p,!1,function(e){t("WfRo")},"data-v-577ee76e",null).exports,y=t("ew3j"),k=t.n(y),w=t("3Ytr"),g=t.n(w),q=t("KYwo"),_=t.n(q),D=t("H6pD"),T=t.n(D),N={zeus:k.a,loki:g.a,odin:_.a,hel:T.a},C=t("WyTI"),A=t.n(C),R=function(e){var a=[];if(null==e)return void console.error("buildDeck received null");return e.class.forEach(function(t){for(var n=0;n<t.qty;n++){var i={char:e.name,atk:t.atk,def:t.def};a.push(new H(i))}}),e.specials.forEach(function(t){for(var n=0;n<t.qty;n++){var i={name:t.name,char:e.name,info:t.info,atk:t.atk};a.push(new H(i))}}),e.support.forEach(function(e){e.class.forEach(function(t){for(var n=0;n<t.qty;n++){var i={char:e.name,atk:t.atk,def:t.def};a.push(new H(i))}}),e.specials.forEach(function(t){for(var n=0;n<t.qty;n++){var i={name:t.name,char:e.name,info:t.info,atk:t.atk};a.push(new H(i))}})}),console.log("generated deck of "+a.length+" cards"),function(e){for(var a,t,n=e.length;0!==n;)t=Math.floor(Math.random()*n),a=e[n-=1],e[n]=e[t],e[t]=a;return e}(a)};function H(e){this.guid=A.a.raw(),this.name=e.name||"Basic",this.character=e.char,this.info=e.info,this.atk=e.atk||0,this.def=e.def||0,null==e.info&&delete this.info}var E={HAND:0,INFO:1,DISCARD:2},I={name:"App",components:{Hand:l,Discards:u,GodInfo:v},data:function(){return{teamName:"default",deck:[],cards:[],discardPile:[],showDiscardPile:!1,characters:N,showInfoPanel:!0,isHoverDrawPile:!1,drawPileText:"Battle of Gods",VIEW:E,currentView:E.INFO,initialized:!1}},computed:{getView:function(){return this.currentView}},methods:{setupDeck:function(e){var a=this.getTeamByName(e);if(!a)return console.log("Failed to getTeamByName",e);this.initialized=!0,this.teamName=e,this.deck=R(a),this.cards=this.deck.splice(0,4),this.resetDiscards()},drawCard:function(){return this.deck.shift()},removeCard:function(e){if(this.currentView===E.DISCARD){var a=this.discardPile.findIndex(function(a){return a.guid===e.guid});-1!=a&&(this.cards.unshift(e),this.discardPile.splice(a,1))}else if(this.currentView===E.HAND){var t=this.cards.findIndex(function(a){return a.guid===e.guid});-1!=t&&(this.discardPile.unshift(e),this.cards.splice(t,1))}},viewDiscard:function(){this.currentView=E.DISCARD},viewDiscardText:function(){return this.currentView===E.DISCARD?"Back":"View Discard Pile"},viewHand:function(){this.currentView=E.HAND},viewInfo:function(){this.currentView=E.INFO},viewInfoText:function(){return this.currentView===E.INFO?"Back":this.teamName},resetDiscards:function(){this.discardPile=[]},getTeamByName:function(e){var a=null;return r()(N).forEach(function(t){N[t].team===e&&(a=N[t])}),a},onHoverDrawPile:function(){this.isHoverDrawPile=!0,this.drawPileText="DRAW CARD"},offHoverDrawPile:function(){this.isHoverDrawPile=!1,this.drawPileText="Battle of Gods"}}},b={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("header",[e.initialized?e._e():t("h1",{staticStyle:{width:"100%"}},[e._v("\n      Battle of Gods\n    ")]),e._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:e.initialized,expression:"initialized"}],class:{hidden:e.getView===e.VIEW.DISCARD||!e.initialized},on:{click:function(a){e.getView===e.VIEW.HAND?e.viewInfo():e.viewHand()}}},[e._v("\n      "+e._s(e.viewInfoText())+"\n    ")]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.initialized,expression:"initialized"}],staticClass:"drawpile",class:{"hover-drawpile":e.isHoverDrawPile,hidden:e.getView!==e.VIEW.HAND},on:{click:function(a){e.cards.unshift(e.drawCard())},mouseover:function(a){e.onHoverDrawPile()},mouseout:function(a){e.offHoverDrawPile()}}},[t("h1",[e._v("\n        "+e._s(e.drawPileText)+"\n      ")]),e._v(" "),t("h2",[e.isHoverDrawPile?e._e():t("span",[e._v("Draw Pile")]),e._v("\n         ( "+e._s(e.deck.length)+" )\n      ")])]),e._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:e.initialized,expression:"initialized"}],class:{hidden:e.getView===e.VIEW.INFO},on:{click:function(a){e.getView===e.VIEW.HAND?e.viewDiscard():e.viewHand()}}},[e._v("\n      "+e._s(e.viewDiscardText())+"\n    ")])]),e._v(" "),e.getView===e.VIEW.HAND?t("Hand",{attrs:{cards:e.cards,drawCard:e.drawCard,removeCard:e.removeCard}}):e._e(),e._v(" "),e.getView===e.VIEW.INFO?t("GodInfo",{attrs:{characters:e.characters,setupDeck:e.setupDeck,viewHand:e.viewHand,teamName:e.teamName}}):e._e(),e._v(" "),e.getView===e.VIEW.DISCARD?t("Discards",{attrs:{cards:e.discardPile,removeCard:e.removeCard}}):e._e()],1)},staticRenderFns:[]};var P=t("VU/8")(I,b,!1,function(e){t("9uFc")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:P},template:"<App/>"})},WfRo:function(e,a){},d6Dt:function(e,a){},ew3j:function(e,a,t){var n=t("/Thj");e.exports={name:"Zeus",faction:"Greek",team:"Zeus & Poseidon",health:18,class:n.BLUE,specials:[{name:"Ethereal Bolt",qty:3,atk:8,info:"Ranged : Zeus hurls a magnifescent bold of lightning at an opponent"},{name:"Sacred Thunder",qty:2,info:"AoE : 2 radius : All opponents within range have one less action on their next turn"},{name:"Harpyia",qty:2,info:"The Hounds of Zeus may carry off an adjacent opponent to any open space on the board"},{name:"Wisdom of Metis",qty:2,info:"Draw 3 cards"}],transformations:[{form:"Eagle",effect:""}],support:[{name:"Poseidon",health:15,class:n.MINOR_STRONG,specials:[{name:"Great Flood",qty:2,info:"AoE : 1 radius : Instantly deal 3 damage"},{name:"Drought",qty:2,info:"Draw 2 cards; other players may not draw cards until this player's next turn"},{name:"Cast Trident",qty:3,atk:7,info:"Ranged : (Fill me out!)"},{name:"Unleash the Depths",qty:2,atk:5,info:"Melee :  Conjure a monsterous sea serpent to attack an opponent; Move Poseidon up to 6 spaces"},{name:"Storm of the Century",qty:1,info:"AoE: 3 radius : If both characters are still alive, instantly deal 2 damage to opponents within range; affected players have on less action on their next turn"}]}]}}},["NHnr"]);
//# sourceMappingURL=app.abdeabeb2c56b6eff739.js.map
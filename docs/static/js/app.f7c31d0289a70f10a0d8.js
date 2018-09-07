webpackJsonp([1],{"+k8e":function(e,t){},"9L2g":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),n={name:"Card",props:["cardData","removeCard","isCardChosen","swipeDirection"],data:function(){return{disabled:!1}},methods:{onTap:function(){var e=this;"left"===this.swipeDirection?this.$el.style.left="-400px":this.$el.style.left="400px",this.$el.style.opacity=0,setTimeout(function(){return e.removeCard(e.cardData)},500)}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return"left"===e.swipeDirection?a("div",{directives:[{name:"touch",rawName:"v-touch:swipe.left",value:e.onTap,expression:"onTap",arg:"swipe",modifiers:{left:!0}},{name:"touch",rawName:"v-touch:longtap",value:e.onTap,expression:"onTap",arg:"longtap"}],staticClass:"card",class:{disabled:!0===this.isCardChosen},on:{dblclick:e.onTap}},[a("h1",[e._v(e._s(e.cardData.owner))]),e._v(" "),a("div",{staticClass:"name-and-numbers"},[a("h2",[e._v(e._s(e.cardData.name))]),e._v(" "),a("p",{staticClass:"atk-def"},[e._v(e._s(e.cardData.atk)+" / "+e._s(e.cardData.def))])]),e._v(" "),a("p",{staticClass:"info"},[e._v(e._s(e.cardData.effect))])]):a("div",{directives:[{name:"touch",rawName:"v-touch:swipe.right",value:e.onTap,expression:"onTap",arg:"swipe",modifiers:{right:!0}},{name:"touch",rawName:"v-touch:longtap",value:e.onTap,expression:"onTap",arg:"longtap"}],staticClass:"card",class:{disabled:!0===this.isCardChosen},on:{dblclick:e.onTap}},[a("h1",[e._v(e._s(e.cardData.owner))]),e._v(" "),a("div",{staticClass:"name-and-numbers"},[a("h2",[e._v(e._s(e.cardData.name))]),e._v(" "),a("p",{staticClass:"atk-def"},[e._v(e._s(e.cardData.atk)+" / "+e._s(e.cardData.def))])]),e._v(" "),a("p",{staticClass:"info"},[e._v(e._s(e.cardData.effect))])])},staticRenderFns:[]};var r=a("VU/8")(n,s,!1,function(e){a("VHMS")},"data-v-39bee9e5",null).exports,c={name:"Hand",components:{Card:r},props:["cards","removeCard"],data:function(){return{}},methods:{},created:function(){window.scrollTo(0,0)}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("section",[a("span",[e._v("Current Hand ("+e._s(e.cards.length)+")")]),e._v(" "),e._m(0)]),e._v(" "),a("div",{staticClass:"hand"},e._l(e.cards,function(t){return a("Card",{key:t.guid,attrs:{cardData:t,removeCard:e.removeCard}})}))])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"help"},[this._v("Swipe right or long-press a card to play it "),t("br"),this._v(" (double click on desktop)")])}]};var d=a("VU/8")(c,o,!1,function(e){a("ckH9")},"data-v-5415ef10",null).exports,l={name:"Hand",components:{Card:r},props:["cards","removeCard"],data:function(){return{swipeDirection:"left"}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("section",[a("span",[e._v("Discard Pile ("+e._s(e.cards.length)+")")]),e._v(" "),e._m(0)]),e._v(" "),a("div",{staticClass:"discards"},e._l(e.cards,function(t){return a("Card",{key:t.guid,attrs:{cardData:t,removeCard:e.removeCard,swipeDirection:e.swipeDirection}})}))])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"help"},[this._v("Swipe left or long-press a card to return to hand "),t("br"),this._v(" (double click on desktop)")])}]};var h=a("VU/8")(l,u,!1,function(e){a("9L2g")},"data-v-07760244",null).exports,f=a("fZjL"),m=a.n(f),v={name:"TeamList",components:{},props:["teams","hideList"],computed:{teamList:function(){return console.log(this.teams["Quetzalcoatl & Serpent Priest"]),this.teams}},data:function(){return{}},methods:{getPrimaryChar:function(e){var t=this.teams[e];return t&&t.characters?t.characters[0].name+' - <img class="icon" src="static/heart.png" /> '+t.characters[0].health:e},getSecondaryChar:function(e){var t=this.teams[e];return t&&t.characters?t.characters[1].name+" - "+t.characters[1].health+" health":""}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("h3",[e._v("TEAM LIST")]),e._v(" "),a("button",{staticClass:"button-topleft",on:{click:e.hideList}},[e._v("\n      Back\n    ")]),e._v(" "),a("div",{staticClass:"team-list"},e._l(e.teamList,function(t){return a("li",{key:t.name},[a("span",[e._v(e._s(t.characters[0].name)+" - "),a("img",{attrs:{src:"static/heart.png"}}),e._v("  "+e._s(t.characters[0].health))]),e._v(" "),a("span",[e._v(e._s(t.characters[1].name)+" - "),a("img",{attrs:{src:"static/heart.png"}}),e._v("  "+e._s(t.characters[1].health))]),e._v(" "),a("p"),e._v(" "),a("span",{staticClass:"card-count"},[e._v("Card Count: "+e._s(t.cardCount))]),e._v(" "),a("div",{staticClass:"icon-container"},[a("p",[a("img",{staticClass:"icon",attrs:{src:"static/attack.png"}}),e._v(" "+e._s(t.totalAtk))]),e._v(" "),a("p",[a("img",{staticClass:"icon",attrs:{src:"static/defense.png"}}),e._v(" "+e._s(t.totalDef))])])])}))])},staticRenderFns:[]};var w={name:"GodInfo",components:{TeamList:a("VU/8")(v,p,!1,function(e){a("mvTx")},"data-v-707b45bc",null).exports},props:["characters","setupDeck","teamName","currentTeamData","viewHand","viewInfo","viewTeamList"],computed:{teams:function(){return m()(this.characters)}},data:function(){return{selectedTeamName:this.teamName,init:"default"!==this.teamName,showingTeamList:!1}},methods:{selectTeam:function(e){this.setupDeck(e.target.value),this.viewHand()},hideList:function(){this.showingTeamList=!1,this.viewInfo()},showTeamList:function(){this.showingTeamList=!0,this.viewTeamList()}}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"god-info"},[e.showingTeamList?e._e():a("section",[a("h2",[e._v("Select your Team")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedTeamName,expression:"selectedTeamName"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedTeamName=t.target.multiple?a:a[0]},e.selectTeam]}},[a("option",{attrs:{disabled:"",value:"default"}},[e._v("Choose your Team")]),e._v(" "),e._l(e.teams,function(t){return a("option",{key:t,domProps:{value:t}},[e._v("\n            "+e._s(t)+"\n        ")])})],2)]),e._v(" "),e.showingTeamList?e._e():a("button",{staticClass:"button-topright",on:{click:function(t){e.showTeamList()}}},[e._v("\n    All Teams\n  ")]),e._v(" "),e.showingTeamList?a("TeamList",{attrs:{hideList:e.hideList,teams:e.characters}}):e._e()],1)},staticRenderFns:[]};var C=a("VU/8")(w,_,!1,function(e){a("eFBO")},"data-v-2f519b34",null).exports,D=a("c/Tr"),T=a.n(D),g={name:"CardList",components:{Card:r},props:["cards","removeCard","isCardChosen","swipeDirection"],data:function(){return{}},methods:{}},I={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-list"},e._l(e.cards,function(t){return a("Card",{key:t.guid,attrs:{cardData:t,removeCard:e.removeCard,isCardChosen:e.isCardChosen,swipeDirection:e.swipeDirection}})}))},staticRenderFns:[]};var k={name:"SpecialFunction",components:{Card:r,CardList:a("VU/8")(g,I,!1,function(e){a("vQXZ")},"data-v-0367e2ca",null).exports},props:["specialFunctionData","specialFunctionCards","viewHand","deck","discardPile","returnToDeck","returnToDiscards","removeCard","shuffle"],data:function(){return{showCardList:this.specialFunctionData.name!==this.specialFunctionCards.SHAPESHIFTING,cardsFromDeck:[],isCardChosen:this.specialFunctionData.name===this.specialFunctionCards.SHAPESHIFTING}},created:function(){var e=this;switch(window.scrollTo(0,0),this.specialFunctionData.name){case this.specialFunctionCards.VALKYRIE_TOWER:this.cardsFromDeck=this.deck.splice(0,5);break;case this.specialFunctionCards.ANIMAL_SACRIFICE:this.cardsFromDeck=this.deck.splice(0,4);break;case this.specialFunctionCards.DIVINE_SIGHT:this.cardsFromDeck=this.deck.splice(0);break;case this.specialFunctionCards.HARVEST_MOON:var t=T()(this.discardPile);this.cardsFromDeck=t.filter(function(t){return t.name!==e.specialFunctionCards.HARVEST_MOON}),console.log(this.cardsFromDeck);case this.specialFunctionCards.SHAPESHIFTING:}},methods:{execSpecialFunction:function(){this.specialFunctionData.name,window.scrollTo(0,0),this.viewHand()},chooseCard:function(e){var t=this.cardsFromDeck.findIndex(function(t){return t.guid===e.guid});-1!==t&&(this.cardsFromDeck.splice(t,1),this.specialFunctionData.name===this.specialFunctionCards.HARVEST_MOON?this.returnToDiscards(this.cardsFromDeck):this.returnToDeck(this.cardsFromDeck),this.removeCard(e),this.specialFunctionData.name!==this.specialFunctionCards.DIVINE_SIGHT&&this.specialFunctionData.name!==this.specialFunctionCards.VALKYRIE_TOWER||(this.shuffle(),this.viewHand(),window.scrollTo(0,0)),this.isCardChosen=!0)}}},F={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("span",[e._v("You have played")]),e._v(" "),a("p",[e._v(e._s(e.specialFunctionData.name))]),e._v(" "),a("p",{staticClass:"info"},[e._v(e._s(e.specialFunctionData.info))]),e._v(" "),a("button",{class:{disabled:!e.isCardChosen},on:{click:function(t){e.execSpecialFunction()}}},[e._v("\n    DONE\n  ")]),e._v(" "),e.showCardList?a("CardList",{attrs:{cards:e.cardsFromDeck,removeCard:e.chooseCard,isCardChosen:e.isCardChosen}}):e._e()],1)},staticRenderFns:[]};var V=a("VU/8")(k,F,!1,function(e){a("TBr8")},"data-v-7e781510",null).exports,N=a("WyTI"),E=a.n(N);function A(e){var t=[];return e.cards.forEach(function(e,a){t.push(new function(e){this.guid=E.a.raw(),this.name=e.name||"Basic",this.owner=e.owner,this.effect=e.effect,this.atk=e.atk||0,this.def=e.def||0,e.rng&&(this.effect="Ranged");-1==this.def&&(this.def="*");-1==this.atk&&(this.atk="*")}(e))}),console.log("generated deck of "+t.length+" cards"),console.log("deck",t),console.log("special card count: ",t.filter(function(e){return"Basic"!==e.name}).length),console.log("basic melee count: ",t.filter(function(e){return"Basic"===e.name&&!e.effect}).length),console.log("basic ranged count:",t.filter(function(e){return"Ranged"===e.effect}).length),S(t)}function S(e){for(var t=e.length,a=void 0,i=void 0;0!==t;)i=Math.floor(Math.random()*t),a=e[t-=1],e[t]=e[i],e[i]=a;return e}var b=a("gRE1"),y=a.n(b),H=a("d7EF"),L=a.n(H),x=a("//Fk"),R=a.n(x),O=a("Zrlr"),W=a.n(O),M=a("wxAW"),P=a.n(M),B=a("mtWM"),G=a.n(B),z="bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YjZjZDgxMjJkOWU0YzNhZDhhZDVkYTgiLCJuYW1lIjoiRGluZ2xlIE1jRnVzcyIsInBhc3N3b3JkIjoiJDJiJDEwJEh3N1p3UTIxaGhWaUFzZWZwY2lSeXVaclBrMEtLQXhrb1ZHa1d4bXgzd29QaVltbDhMT3lhIiwiX192IjowfQ.tfkpq72MeZVohMpBISVwO9pD3eg8AghVksLSrp6ZEb4",U="https://battleofgods.now.sh/api",Z=new(function(){function e(){W()(this,e),G.a.interceptors.request.use(function(e){return e.headers.Authorization=z,e})}return P()(e,[{key:"fetchAndCompileAllData",value:function(){var e=this;return new R.a(function(t,a){R.a.all([e.fetchTeams(),e.fetchCharacters(),e.fetchSpCards(),e.fetchBscards()]).then(function(e){var a={},i=L()(e,4),n=i[0],s=i[1],r=i[2],c=i[3];n.forEach(function(e){a[e.name]={name:e.name,deckClass:e.deckClass,teamKey:e.key,characters:[],cards:[]}}),y()(a).forEach(function(e){s.forEach(function(t){e.teamKey===t.team&&e.characters.push({name:t.name,health:t.health,minorCount:t.minorCount})}),r.forEach(function(t){if(e.characters.find(function(e){return e.name===t.owner}))for(var a=0;a<t.qty;a++)e.cards.push(t)}),c.forEach(function(t){e.deckClass===t.colorClass&&t.cards.forEach(function(t){for(var a=0;a<t.qty;a++)e.cards.push(t)})})}),t(a)}).catch(function(e){console.error(e),a(e)})})}},{key:"fetchBscards",value:function(){return this.fetch("basiccardclasses/all")}},{key:"fetchSpCards",value:function(){return this.fetch("specialcards?limit=100")}},{key:"fetchTeams",value:function(){return this.fetch("teams")}},{key:"fetchCharacters",value:function(){return this.fetch("characters")}},{key:"fetch",value:function(e){return new R.a(function(t,a){G.a.get(U+"/"+e).then(function(e){t(e.data)}).catch(function(e){return a(e)})})}}]),e}()),J={DIVINE_SIGHT:"Divine Sight",VALKYRIE_TOWER:"Valkyrie Tower",HARVEST_MOON:"Harvest Moon",ANIMAL_SACRIFICE:"Animal Sacrifice",SHAPESHIFTING:"Shapeshifting"},Y=["Battle of Gods","Immortal Fire","Immortal Tournament","Immortal Battlezone","Immortal Battlefield","Battleground Divinus","Tournament of Nyx","Game of Nyx","Tournament Eternal"],$={HAND:0,INFO:1,DISCARD:2,TEAM_LIST:3,FUNCTION:4};function j(e){return e.returnValue="All data will be lost","All data will be lost"}window.onbeforeunload=j,window.onpagehide=j;var Q={name:"App",components:{Hand:d,Discards:h,GodInfo:C,SpecialFunction:V},created:function(){var e=this;console.log("LOADING..."),Z.fetchAndCompileAllData().then(function(t){e.teamData=t,console.log("READY!")}).catch(function(e){return console.error("fetch error:",e)})},data:function(){return{teamName:"default",deck:[],cards:[],discardPile:[],showDiscardPile:!1,teamData:{},showInfoPanel:!0,isHoverDrawPile:!1,drawPileText:"DRAW CARD",VIEW:$,currentView:$.INFO,initialized:!1,specialFunctionData:{},specialFunctionCards:J}},computed:{getView:function(){return this.currentView},randomizeGameName:function(){return Y[Math.floor(Math.random()*Y.length)]}},methods:{setupDeck:function(e){var t=this.getTeamByName(e);if(!t)return console.log("Failed to getTeamByName",e);this.initialized=!0,this.teamName=e,this.deck=A(t),this.cards=this.deck.splice(0,0),this.resetDiscards()},drawCard:function(){if(this.cards.length>=10)return alert("Max Card Limit Reached- Discard a card to draw another");var e=this.deck.shift();e&&(this.cards.unshift(e),0===this.deck.length&&(this.deck=S(this.discardPile).concat(this.deck),this.resetDiscards(),alert("Your discards have been reshuffled into your draw pile!")))},removeCard:function(e){if(this.currentView===$.DISCARD){var t=this.discardPile.findIndex(function(t){return t.guid===e.guid});-1!=t&&(this.cards.unshift(e),this.discardPile.splice(t,1))}else if(this.currentView===$.HAND){var a=this.cards.findIndex(function(t){return t.guid===e.guid});-1!=a&&(this.execSpecialFunction(e.name),this.discardPile.unshift(e),this.cards.splice(a,1))}else this.currentView===$.FUNCTION&&this.cards.unshift(e)},viewDiscard:function(){this.currentView=$.DISCARD},viewDiscardText:function(){return this.currentView===$.DISCARD?"Return to Hand":"Discard Pile"},viewHand:function(){this.currentView=$.HAND},viewTeamList:function(){this.currentView=$.TEAM_LIST},viewFunction:function(){this.currentView=$.FUNCTION},viewInfo:function(){this.currentView=$.INFO},viewInfoText:function(){return this.currentView===$.INFO?"Return to Hand":"Reselect Team"},resetDiscards:function(){this.discardPile=[]},getTeamByName:function(e){return this.teamData[e]},execSpecialFunction:function(e){switch(e){case J.DIVINE_SIGHT:this.specialFunctionData={name:e,info:"Choose one card from your deck to place into your hand; Your deck will then be reshuffled"};break;case J.VALKYRIE_TOWER:this.specialFunctionData={name:e,info:"View the top 5 cards from your deck and double-tap one to place into your hand; Your deck will then be reshuffled"};break;case J.HARVEST_MOON:this.specialFunctionData={name:e,info:"Search through your discard pile and place one card into your hand"};break;case J.ANIMAL_SACRIFICE:this.specialFunctionData={name:e,info:"View the top 4 cards from your deck; double-tap one to place it into your hand; The remaining 3 cards will be placed on top of your draw pile bottom-first (i.e. the card on top here will be the next card you draw)"};break;case J.SHAPESHIFTING:this.specialFunctionData={name:e,info:"Steal an opponent's card. Simply write down the card values and play it like your own. Does not need to be played immediately"};break;default:this.specialFunctionData={}}null!=this.specialFunctionData.name&&this.viewFunction()},returnToDeck:function(e){this.deck=e.concat(this.deck)},returnToDiscards:function(e){this.discardPile=e},shuffle:function(){this.deck=S(this.deck)}}},K={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"},on:{click:e.preventZoom}},[a("header",[a("button",{directives:[{name:"show",rawName:"v-show",value:e.initialized&&e.getView===e.VIEW.HAND||e.getView===e.VIEW.INFO,expression:"initialized && getView === VIEW.HAND || getView === VIEW.INFO"}],class:{hidden:e.getView===e.VIEW.DISCARD||!e.initialized},on:{click:function(t){e.getView===e.VIEW.HAND?e.viewInfo():e.viewHand()}}},[e._v("\n      "+e._s(e.viewInfoText())+"\n    ")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.initialized,expression:"initialized"}],staticClass:"drawpile",class:{"hover-drawpile":e.isHoverDrawPile,hidden:e.getView!==e.VIEW.HAND},on:{click:e.drawCard}},[a("h1",[e._v("\n        "+e._s(e.drawPileText)+"\n      ")]),e._v(" "),a("h2",[e._v("\n         ( "+e._s(e.deck.length)+" )\n      ")])]),e._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:e.initialized&&e.getView!==e.VIEW.FUNCTION&&e.getView!==e.VIEW.TEAM_LIST,expression:"initialized && getView !== VIEW.FUNCTION && getView !== VIEW.TEAM_LIST"}],class:{hidden:e.getView===e.VIEW.INFO},on:{click:function(t){e.getView===e.VIEW.HAND?e.viewDiscard():e.viewHand()}}},[e._v("\n      "+e._s(e.viewDiscardText())+"\n    ")])]),e._v(" "),e.getView===e.VIEW.INFO?a("h1",{staticClass:"main-title",staticStyle:{width:"100%"}},[e._v("\n    "+e._s(e.randomizeGameName)+"\n  ")]):e._e(),e._v(" "),e.getView===e.VIEW.HAND?a("Hand",{attrs:{cards:e.cards,drawCard:e.drawCard,removeCard:e.removeCard}}):e._e(),e._v(" "),e.getView===e.VIEW.INFO||e.getView===e.VIEW.TEAM_LIST?a("GodInfo",{attrs:{characters:e.teamData,setupDeck:e.setupDeck,viewHand:e.viewHand,viewTeamList:e.viewTeamList,viewInfo:e.viewInfo,teamName:e.teamName,currentTeamData:e.getTeamByName(e.teamName)}}):e._e(),e._v(" "),e.getView===e.VIEW.DISCARD?a("Discards",{attrs:{cards:e.discardPile,removeCard:e.removeCard}}):e._e(),e._v(" "),e.getView===e.VIEW.FUNCTION?a("SpecialFunction",{attrs:{specialFunctionData:e.specialFunctionData,specialFunctionCards:e.specialFunctionCards,viewHand:e.viewHand,discardPile:e.discardPile,deck:e.deck,removeCard:e.removeCard,returnToDeck:e.returnToDeck,returnToDiscards:e.returnToDiscards,shuffle:e.shuffle}}):e._e()],1)},staticRenderFns:[]};var X=a("VU/8")(Q,K,!1,function(e){a("+k8e")},null,null).exports,q=a("ufW0"),ee=a.n(q);i.a.use(ee.a,{disableClick:!0,tapTolerance:10,swipeTolerance:30,longTapTimeInterval:400}),i.a.config.productionTip=!1,i.a.mixin({data:function(){return{preventZoom:function(e){var t=e.timeStamp,a=t-(e.currentTarget.dataset.lastTouch||t);e.currentTarget.dataset.lastTouch=t,!a||a>500||e.preventDefault()}}}}),new i.a({el:"#app",components:{App:X},template:"<App/>"})},TBr8:function(e,t){},VHMS:function(e,t){},ckH9:function(e,t){},eFBO:function(e,t){},mvTx:function(e,t){},vQXZ:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f7c31d0289a70f10a0d8.js.map
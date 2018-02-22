// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './routes'

// const teamsPage = 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  // data: {
  //   currentRoute: window.location.pathname,
  // },
  // computed: {
  //   ViewComponent() {
  //     const matchingView = routes[this.currentRoute]
  //     return matchingView
  //       ? require('./pages/' + matchingView + '.vue')
  //       : require('./pages/404.vue')
  //   },
  // },
  // render (h) {
  //   return h(this.ViewComponent)
  // },
  template: '<App/>'
})



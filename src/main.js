// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import routes from './routes';
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents, {
  disableClick: true,
  tapTolerance: 10,
  swipeTolerance: 30,
  longTapTimeInterval: 400
});
Vue.config.productionTip = false

Vue.mixin({
  data() {
    return {
      preventZoom (e) {
        var t2 = e.timeStamp;
        var t1 = e.currentTarget.dataset.lastTouch || t2;
        var dt = t2 - t1;
        e.currentTarget.dataset.lastTouch = t2;
      
        if (!dt || dt > 500) return; // dont double-tap
      
        e.preventDefault();
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});



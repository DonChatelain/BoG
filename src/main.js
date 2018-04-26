// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import routes from './routes';
import VueTouch from 'vue-touch';

Vue.use(VueTouch, {name: 'v-touch'});
Vue.config.productionTip = false

Vue.mixin({
  data() {
    return {
      preventZoom (e) {
        var t2 = e.timeStamp;
        var t1 = e.currentTarget.dataset.lastTouch || t2;
        var dt = t2 - t1;
        // var fingers = e.touches.length;
        e.currentTarget.dataset.lastTouch = t2;
      
        if (!dt || dt > 500) return; // not double-tap
      
        e.preventDefault();
        e.target.click();
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



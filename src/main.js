// JS import
import Vue from 'vue';
import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'
Vue.use(VueOnsen);

import App from './App.vue'

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';


new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    this.$ons.disableAutoStyling(); // Or any other method
  }
})


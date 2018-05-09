// JS import
import Vue from 'vue';
import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'

import App from './App.vue'

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';


new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.use(VueOnsen);

// JS import
import Vue from 'vue';
import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'
Vue.use(VueOnsen);

import router from './router.js';

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import modalUser from './modalUser'
import modalPost from './modalPost'

Vue.component('modal-user', modalUser)
Vue.component('modal-post', modalPost)

new Vue({
  el: '#app',
  router: router,
  beforeCreate() {
    this.$ons.disableAutoStyling(); // Or any other method
  }
})


import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import auth from './auth.js';

import App from './App.vue';
import Login from './Login.vue';

const routes = [
  { path: '/', component: App, meta: { requiresAuth: true } },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(!auth.isLoggedIn()){
      next({ path: '/login'});
    }
    else{
      next();
    }
  }
  else{
    next();
  }
})

export default router

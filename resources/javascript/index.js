import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './routes/application.vue';
import Index from './routes/index.vue';
import User from  './routes/user/vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/user/:username',
    name: 'user',
    component: User,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  base: '/app',
});

const app = new Vue({ ...App, router }).$mount('.vue-app');

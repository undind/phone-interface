import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import axios from '@/request/request';
import store from './store';

import { dateFilter } from '@/filters';

store.$axios = axios;

Vue.filter("date", dateFilter);

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});

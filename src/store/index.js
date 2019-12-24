import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import contacts from '@/store/modules/contacts';
import histories from '@/store/modules/histories';

export default new Vuex.Store({
  modules: {
    contacts,
    histories
  }
});

import Vue from 'vue';
import Vuex from 'vuex';

import API from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currencies: [],
  },
  mutations: {
    FETCH_CURRENCIES(state, currencies) {
      state.currencies = currencies;
    },
  },
  actions: {
    fetchCurrencies({ commit }) {
      API.requestAll()
        .then((response) => {
          commit('FETCH_CURRENCIES', response.data);
        })
        .catch(((error) => {
          /* eslint no-console: 0 */
          console.log(error.statusText);
        }));
    },
  },
});

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      switch1: true
    },
    mutations: {
      CHANGE_STATE(state, val) {
        state.switch1 = val
      }
    }
  }
)

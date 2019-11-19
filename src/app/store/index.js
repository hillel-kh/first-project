import Vue from 'vue';
import Vuex from 'vuex';

const store = new Vuex.Store({
  state: {
    constructorTemplates: [],
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    }
  }
});
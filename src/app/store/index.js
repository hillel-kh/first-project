import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    constructorTemplates: [
      {
        id: 1,
        html: `<div style="width: 300px;height: 200px;background: #17a2b8;"></div><div style="width: 250px;height: 200px;background: #dc3545;position: relative;top: -50px;left: 30px;"></div>`
      },
      {
        id: 2,
        html: `<div style="width: 300px;height: 200px;background: gray;"></div><div style="width: 250px;height: 200px;background: yellow;position: relative;top: -50px;left: 30px;"></div>`
      },
      {
        id: 3,
        html: `<div style="width: 300px;height: 200px;background: gray;"></div><div style="width: 250px;height: 200px;background: yellow;position: relative;top: -50px;left: 30px;"></div>`
      },
    ],
  },
  mutations: {

  },
  actions: {
    getItem(state) {
      return state.constructorTemplates
    }
  }
});

export default store
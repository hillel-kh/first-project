import '../assets/scss/main.scss';

import Vue from 'vue';
import App from './components/Application.vue';
import store from './store';
// import Vuex from 'vuex';
//
// Vue.use(Vuex);

const app = new Vue(App, store);
window.app = app.$mount('#app');
import '../scss/main.scss';

import Vue from 'vue';
import App from './components/Application.vue';

const app = new Vue(App);
window.app = app.$mount('#app');
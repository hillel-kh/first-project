import Vue from 'vue';
import App from './components/Application.vue';
import './styles/main.scss';

const app = new Vue(App);
window.app = app.$mount('#app');

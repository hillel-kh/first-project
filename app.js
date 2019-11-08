import Vue from 'vue';
import App from './components/Application.vue';
import './styles/main.css';
import './sass/reset.sass';

const app = new Vue(App);
window.app = app.$mount('#app');

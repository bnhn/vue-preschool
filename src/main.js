import Vue from 'vue';
import App from './App.vue';
import { questions } from './data/questions.js';
import Welcome from './templates/Welcome.vue';

Vue.component('tpl-welcome', Welcome);

new Vue({
  el: '#app',
  data:{
    questions
  },
  render: h => h(App)
})

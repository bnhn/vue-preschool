import Vue from 'vue';
import App from './App.vue';
import Welcome from './templates/Welcome.vue';
import QuestionSet from './templates/questionSet.vue';

Vue.component('Welcome', Welcome);
Vue.component('Questions', QuestionSet)

new Vue({
  el: '#app',

  render: h => h(App)
})

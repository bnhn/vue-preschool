<template>
  <div class="container">
    <appWelcome
      v-if="!playing"
      v-on:startPlaying="play"
    ></appWelcome>
    <appQuestion v-else="playing" 
      :questions="questions"
    ></appQuestion>
  </div>
</template>

<script>
import { questions } from './data/questions.js';
import Question from './templates/Question.vue';
import Welcome from './templates/Welcome.vue';

export default {
  name: 'app',
  data () {
    return {
      questions: questions,
      playing: 0,
      // answered: []
      }
    },
    methods: {
      play() {
        this.playing = true;
        console.log("play", this.playing);
      }
    },
    components: {
      appQuestion: Question,
      appWelcome: Welcome
    }
  }
</script>

<style>
  .container {
    height: 100vh;
  }
</style>
<template>
  <div class="container">
    <Welcome
      v-if="!playing"
      v-on:startPlaying="play"
    ></Welcome>
    <Question v-else="playing" 
      :questions="questions"
    ></Question>
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
      Question: Question,
      Welcome: Welcome
    }
  }
</script>

<style>
  .container {
    height: 100vh;
  }
</style>
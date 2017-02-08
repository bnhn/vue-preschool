<template>
  <div class="container">
    <Welcome
      v-if="!playing"
      v-on:startPlaying="play"
    ></Welcome>
    <Question v-else
      :questions="questions"
    ></Question>
  </div>
</template>

<script>
import { questions } from './data/questions.js';
import Question from './components/Question.vue';
import Welcome from './components/Welcome.vue';

export default {
  name: 'app',
  data () {
    return {
      questions: questions,
      playing: 0,
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

  .start_playing{
        font-family: schoolBell;
        background-color: #e1f5c4;
        border: 3px solid #add86d;
        border-radius: 30%/90%;
        color: #000;
        text-align: center;
        text-transform: capitalize;
        cursor: pointer;
        font-size: 1.5rem;
        padding: 10px;
        width: 160px;
        align-self: center;
        display: block;
    }
    .start_playing:hover{
        box-shadow: 0 3px 1px 1px rgba(0,0,0,0.2);
        background-color:#e1f5c4;
    }
</style>
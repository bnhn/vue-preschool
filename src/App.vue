<template>
  <div class="container">
    <Welcome :questions="questions"></Welcome>
    <!--<Questions 
      :questions="questions"
      :question="question"
    ></Questions>-->
  </div>
</template>

<script>
import { questions } from './data/questions.js';

export default {
  name: 'app',
  data () {
    return {
      questions: questions,
      question: randomQuestion(questions)
      }
    }
  }

  function randomQuestion(questions) {
    if(questions.length){
      let randomIndex = Math.floor(Math.random() * questions.length);
      let question = questions[randomIndex];
      return question;
    }
    return;
  }

</script>

<style>

</style>

<template>
    <div>
        <Question :question="question"></Question>
        <!--<button @click="testing2">Question Set</button>-->
    </div>
    
</template>

<script>
    // import { questions } from '../data/questions';
    import Question from './Question.vue';

    export default {
        props:{
            questions: Array,
            question: Object
        },
        components: {
            Question: Question
        },
        methods:{
            testing2() {
                console.log(this.questions)
            },
           
        }
    }

    
    // let question = randomQuestion(this.questions);

</script>
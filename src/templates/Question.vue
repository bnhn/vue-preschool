<template>
    <div class="question_set">
        <p>{{question.question}}</p>
        <img class="question_image" :src="question.resource.url" alt="Question Image">
        <ul>
            <li class="question-options-item"
                 
                v-for="option in question.options"
                @click="checkAnswer(option, question.answer, question.id)">
                {{ option }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { randomQuestion, filterQuestions } from '../methods.js'
    export default{
        data() {
            return {
                unansweredQuestions: this.questions,
                question: randomQuestion(this.questions),
                tries: 0,
                
            }
        },
        props:{
            questions: Array
        },
        methods:{
            checkAnswer(option, answer, questionID) {
                this.tries++;
                if(option === answer) {
                    this.unansweredQuestions = filterQuestions(this.unansweredQuestions, questionID)
                    this.question = randomQuestion(this.unansweredQuestions);
                    console.log('Correct', option, this.unansweredQuestions);
                    this.tries = 0;
                }
                else if(this.tries < this.totalTriesAllowed) {
                    console.log('oops, try again, totalTriesAllowed:', this.totalTriesAllowed)
                    
                }
                else {
                    console.log('Sorry, moving on');
                    this.question = randomQuestion(this.unansweredQuestions);
                    this.tries = 0;
                }
                
            }
        },
        computed: {
            totalTriesAllowed() {
                return Math.floor(this.question.options.length / 2);
            },
            
        },
    }
   
</script>

<style scoped>
    .question_set {
        display: flex;
        /*justify-content: center;*/
        flex-direction: column;
        border: 2px solid crimson;
        
    }
    .question_image {
        border: 2px solid crimson;
        width: auto;
        height: 300px;
        align-self: center;
    }
    p, ul {
        border: 2px solid crimson;
    }
    ul {
        align-self: center;
    }
    .question-options-item {
        font-family: schoolBell;
        background-color: #e1f5c4;
        border: 5px solid #add86d;
        border-radius: 30%/90%;
        color: #000;
        text-align: center;
        text-transform: capitalize;
        cursor: pointer;
        font-size: 1.5rem;
        padding: 10px;
        width: 160px;
        /*margin: 40px auto;*/
        display: block;
    }
    .question-options-item:hover {
        box-shadow: 0 3px 1px 1px rgba(0,0,0,0.2);
        background-color:#e1f5c4;
    }
    .question__option-item-answer {
    box-shadow: 0 3px 1px 1px rgba(0,0,0,0.2);
    background-color: #79cc00;
}
</style>
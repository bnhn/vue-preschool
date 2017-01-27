<template>
    <div>
        <p>{{question.question}}</p>
        <img :src="question.resource.url" alt="Question Image">
        <ul>
            <li class="question-options-item" v-for="option in question.options">{{ option }}</li>
        </ul>
        <!--<button @click="testing">Question</button>-->
    </div>
</template>

<script>
    export default{
        props:{
            question: Object
        },
        methods:{
            testing() {
                console.log(this.question);
            }
        }
    }
</script>

<style scoped>
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
</style>
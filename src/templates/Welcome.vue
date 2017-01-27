<template>
    <div class = "welcome">
        <p class ="welcome-message">
            Welcome to Vue Pre-School
        </p>
    <button class = "start_playing" @click="startPlaying">play!</button>
    </div>
</template>

<script>
// import { questions } from '../data/questions.js';

    export default{
        props:{
            questions: Array,
            default() {
                return ['blah', 'blah'];
            }
            },
        methods:{
            startPlaying() {
                console.log(this.questions);
            }
        }
    }
</script>

<style scoped>
    .welcome{
        border: 2px solid red;
        align-self: center;
        justify-content: center;
        
    }
    .start_playing{
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
        margin: auto;
        display: block;
    }
    .start_playing:hover{
        box-shadow: 0 3px 1px 1px rgba(0,0,0,0.2);
        background-color:#e1f5c4;
    }
</style>
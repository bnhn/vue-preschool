<template>
    <div class = "welcome">
        <p class ="welcome-message">
            Welcome to Vue Pre-School
        </p>
    <button class = "start_playing" @click="startPlaying">play!</button>
    </div>
</template>

<script>
    export default{
        props: ['questions'],
        methods:{
            startPlaying() {
                console.log(this.questions);
            }
        }
    }
</script>

<style scoped>
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
        margin: 40px auto;
        display: block;
    }
</style>
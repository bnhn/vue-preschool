<template>
    <div class = "welcome">
        <p class ="welcome-message">
            Pre-School
        </p>
    <button class = "start_playing" @click="startPlaying">play!</button>
    </div>
</template>

<script>

    export default{
        data() {
            return {
                playing: 0
            }
        },
        methods:{
            startPlaying() {
                this.playing = 1;
                this.$emit('startPlaying');
                console.log(this.playing);
            }
        }
    }
</script>

<style scoped>
    .welcome{
        border: 2px solid red;
        display: flex;
        flex-direction: column;
        
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
        /*margin: auto;*/
        display: block;
    }
    .start_playing:hover{
        box-shadow: 0 3px 1px 1px rgba(0,0,0,0.2);
        background-color:#e1f5c4;
    }
</style>
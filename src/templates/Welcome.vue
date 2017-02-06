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
        flex-flow: row wrap;
        justify-content: center
        
    }
    p {
        width: 100%;
        text-align: center;
    }
    
</style>
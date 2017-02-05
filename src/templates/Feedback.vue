<template>
    <div>
        <p>You scored {{ score }}</p>
        <button class="start_playing" @click="reset">Play Again</button>
    </div>
</template>

<script>
    export default {
        props: {
            score: Number,
        },
        methods: {
            reset() {
                this.$emit('resetGame');
            }
        }
    }
</script>

<style>
    
</style>
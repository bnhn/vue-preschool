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

<style scoped>
    div {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        /*border: 1px solid mediumorchid;*/
    }
    p {
        width: 100%;
        text-align: center;
        /*border: 1px solid firebrick;*/
    }
</style>
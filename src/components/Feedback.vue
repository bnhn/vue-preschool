<template>
<transition name="fade">
    <div v-if="show">
        
            <p>You scored {{ score }}</p>
            <button class="start_playing" @click="reset">Play Again</button>
        
    </div>
</transition>
</template>

<script>
    export default {
        props: {
            score: Number,
            show: Boolean,
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
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.75s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>
<template>
    <div>
        <transition name="fade">
            <img
                 v-if="show"
                 :src="imageUrl" alt="Question Image">
        </transition>
    </div>
</template>

<script>
    export default {
        props: {
            imageUrl: String,
            playing: Boolean,
        },
        data() {
            return {
                show: this.playing,
            }
        },
        watch: {
            imageUrl: function (val) {
                 this.show = false
                 setTimeout(() => {
                     this.show = true
                    }, 1);
                    console.log('playing',this.playing)
                }
            },   
    }
</script>

<style scoped>
div, img {
        /*border: 2px solid crimson;*/
        width: auto;
        height: 300px;
    }
.fade-enter-active, .fade-leave-active {
  transition: opacity 2.75s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
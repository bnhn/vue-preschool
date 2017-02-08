<template>
    <div>
        <transition name="fade">
            <img
                 :src="imageUrl" alt="Question Image">
        </transition>
    </div>
</template>

<script>
    export default {
        props: {
            imageUrl: String,
        },
        data() {
            return {
                show: false,
            }
        },
        watch: {
            imageUrl: function (val) {
                 this.show = false
                 setTimeout(() => {
                     this.show = true
                    }, 1)
                }
            },   
    }
</script>

<style scoped>
img {
        /*border: 2px solid crimson;*/
        width: auto;
        height: 300px;
    }
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.75s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
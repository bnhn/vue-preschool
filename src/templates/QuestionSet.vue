<template>

</template>

<script>
    import questions from './data/questions';

    function randomQuestion(questions) {
        if(!questions.length) return;
        let randomlySelectedIndex = Math.floor(Math.random() * questions.length);
        return questions[randomlySelectedIndex];
    }
</script>
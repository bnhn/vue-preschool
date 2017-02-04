export function randomQuestion(questions) {
    if(questions.length){
      let randomIndex = Math.floor(Math.random() * questions.length);
      let question = questions[randomIndex];
      return question;
    }
    return;
  }
export function randomQuestion(questions) {
    if(questions.length){
      let randomIndex = Math.floor(Math.random() * questions.length);
      let question = questions[randomIndex];
      return question;
    }
    return;
  }

  export function filterQuestions(questions, questionID) {
    return questions.filter((question) =>{
        return question.id !== questionID;
      });
  }
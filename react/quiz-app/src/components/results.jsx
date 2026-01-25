function Results({questionBank, userAnswers, restartQuiz}) {                   //recebe 3 props do Quiz

  function getScore(){
    let finalScore = 0;
    userAnswers.forEach((answer, index) => {                  // Percorre cada resposta do utilizador
      if (answer === questionBank[index].answer){              // Se a resposta for igual à resposta correta, +1
        finalScore++
      }
    })

    return finalScore
  }
  const score = getScore();       // Executa a função e guarda o resultado


  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score}/{questionBank.length} </p>
      <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default Results;

import { useState } from 'react';
function Quiz() {
  const questionBank = [
    {
      question: "What is the capital of france?",
      options: ["Berlin", "London", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "What language is used for web apps?",
      options: ["PHP", "Python", "Javascript", "All"],
      answer: "All",
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "Java Syntax eXtension",
        "Just a Simple eXample",
        "None of the above",
      ],
      answer: "JavaScript XML",
    },
  ];


  const initialAnswers = [null, null, null];

  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleSelectOption(option) {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;

    setUserAnswers(newUserAnswers)
  }

  return (
    <div>
      <h2>Question 1</h2>
      <p className="question"> {questionBank[currentQuestion].question} </p>

      {questionBank[currentQuestion].options.map((option) => (
        <button className="option" onClick={() => handleSelectOption(option)}>
          {option}
        </button>
      ))}

      <div className="nav-buttons">
        <button> Previous </button>
        <button> Next </button>
      </div>
    </div>
  );
}

export default Quiz;

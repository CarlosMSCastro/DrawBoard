import { useState } from "react";  // Importa o hook useState para criar estados
import Results from "./results";    // "./" significa mesma pasta

function Quiz() {
  const questionBank = [             //array de objetos(dicionarios) -> Base de dados das Perguntas, Opções e Respostas.
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

  const initialAnswers = [null, null, null];        //array com as respostas iniciais (null)x3
  
  // --- Estados do componente ---
//const [valor, funçãoParaMudarValor] = useState(valorInicial)
  const [userAnswers, setUserAnswers] = useState(initialAnswers); // Estado que guarda as respostas do utilizador num array
  const [currentQuestion, setCurrentQuestion] = useState(0); // Estado que controla que pergunta está a ser mostrada
  const [isQuizFinished, setIsQuizFinished] = useState(false); // Estado que indica se o quiz foi finalizado

  const selectedAnswer = userAnswers[currentQuestion]; // Obtém a resposta selecionada para a pergunta atual (lê no array)

  function handleSelectOption(option) {               //Copia o array das respostas para um array novo, e edita a resposta no indice correto
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;

    setUserAnswers(newUserAnswers);
  }

  function goToNext() {
    if (currentQuestion === questionBank.length - 1) {        //se a pergunta for a ultima, troca o state para finished
      setIsQuizFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);    //se nao, actualiza o current question e mostra a pergunta nova
    }
  }

  function restartQuiz() {                   //devolve os states ao estado inicial (para recomeçar o programa)
    setUserAnswers(initialAnswers);
    setCurrentQuestion(0);
    setIsQuizFinished(false);
  }

  function goToPrev() {                             //se for 0, bloqueado, se nao mostra a pergunta anterior
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  if (isQuizFinished) {                       // Se o quiz terminou, renderiza o componente Results
    return (
      <Results
        userAnswers={userAnswers}             // Passa as respostas do utilizador
        questionBank={questionBank}           // Passa as perguntas e respostas corretas
        restartQuiz={restartQuiz}             // Passa a função para reiniciar o quiz
      />
    );
  }

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p className="question"> {questionBank[currentQuestion].question} </p>

      {questionBank[currentQuestion].options.map((option) => (                       // Vai buscar a pergunta atual, Pega no array de opções, Para CADA opção, cria um botão
        <button
          className={"option" + (selectedAnswer === option ? " selected" : "")}      //classe selected se seleccionada
          onClick={() => handleSelectOption(option)}
        >
          {option}
        </button>
      ))}

      <div className="nav-buttons"> 
        <button onClick={goToPrev} disabled={currentQuestion === 0}>         
          Previous
        </button>

        <button onClick={goToNext} disabled={!selectedAnswer}>     
          {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;

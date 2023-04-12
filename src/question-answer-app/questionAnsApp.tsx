import style from "./question.module.scss";
import react, { useState } from "react";
import Button from "react-bootstrap/Button";

const listOfQueAns = [
  {
    id: 1,
    question: "What's Your favourite Color ?",
    answer: "Yellow",
  },
  {
    id: 2,
    question: "What's Your favourite Sport ?",
    answer: "Cricket",
  },
  {
    id: 3,
    question: "What's Your favourite Food ?",
    answer: "lasagna",
  },
];
const Results = ({ answer }: any) => (
  <div className={style.answerDiv}>{answer}</div>
);

function QuestionAnsApp() {
  const [question, setQuestion] = useState({
    id: 3,
    question: "What's Your favourite Food ?",
    answer: "lasagna",
  });

  const [showResults, setShowResults] = useState(false);
  const handleRandomQuestion = () => {
    var random_index = Math.floor(Math.random() * 3);
    var obj = listOfQueAns[random_index];

    setQuestion(obj);
    setShowResults(false);
  };

  const handleShowAnswer = () => {
    setShowResults(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        Question & Answer App
        <div className={style.questionDiv}>{question.question}</div>
        {showResults ? <Results answer={question.answer} /> : null}
        <div className={style.buttonDiv}>
          <Button as="a" variant="success" onClick={handleShowAnswer}>
            Answer
          </Button>
          <Button
            as="a"
            variant="primary"
            onClick={() => handleRandomQuestion()}
          >
            Next
          </Button>
        </div>
      </header>
    </div>
  );
}

export default QuestionAnsApp;

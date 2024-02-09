import { useRef, useState } from "react";
import styled from "styled-components";
import { questions } from "../../assets/questions";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [lockOptions, setLockOptions] = useState(false);
  let [result, setResult] = useState(false);
  const [theQuestions, setTheQuestions] = useState(questions[index]);
  const [correctScore, setCorrectScore] = useState(0);
  const firstOption = useRef(null);
  const secondOption = useRef(null);
  const thirdOption = useRef(null);
  const forthOption = useRef(null);
  const fifthOption = useRef(null);

  let optionsArray = [
    firstOption,
    secondOption,
    thirdOption,
    forthOption,
    fifthOption,
  ];

  const checkAnswer = (e, answer) => {
    if (lockOptions === false) {
      if (theQuestions.answer === answer) {
        e.target.classList.add("correct");
        setLockOptions(true);
        setCorrectScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLockOptions(true);
        optionsArray[theQuestions.answer - 1].current.classList.add("correct");
      }
    }
  };

  const nextQuestion = () => {
    if (lockOptions === true) {
      if (index === questions.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setTheQuestions(questions[index]);
      setLockOptions(false);
      optionsArray.map((option) => option.current.classList.remove("wrong"));
      optionsArray.map((option) => option.current.classList.remove("correct"));
      return null;
    } else {
      alert("Please choose from the options");
    }
  };

  const resetQuiz = () => {
    setIndex(0);
    setTheQuestions(questions[0]);
    setCorrectScore(0);
    setLockOptions(false);
    setResult(false);
  };
  return (
    <TheQuiz>
      <div className="quiz-container">
        <h1 className="main-header">QUIZ APP</h1>
        <hr />
        {result ? (
          <>
            {" "}
            <h1 className="scoreCard">
              YOU SCORED {correctScore} OUT OF {questions.length}
            </h1>
            <button onClick={resetQuiz}>Reset</button>
          </>
        ) : (
          <>
            <h3>
              {index + 1}. &nbsp; {theQuestions.question}
            </h3>
            <ul>
              <li onClick={(e) => checkAnswer(e, 1)} ref={firstOption}>
                {theQuestions.firstOption}
              </li>
              <li onClick={(e) => checkAnswer(e, 2)} ref={secondOption}>
                {theQuestions.secondOption}
              </li>
              <li onClick={(e) => checkAnswer(e, 3)} ref={thirdOption}>
                {theQuestions.thirdOption}
              </li>
              <li onClick={(e) => checkAnswer(e, 4)} ref={forthOption}>
                {theQuestions.forthOption}
              </li>
              <li onClick={(e) => checkAnswer(e, 5)} ref={fifthOption}>
                {theQuestions.fifthOption}
              </li>
            </ul>
            <button onClick={nextQuestion}>Next</button>
            <div className="index">
              {index + 1} OF {questions.length} QUESTIONS
            </div>
          </>
        )}
      </div>
    </TheQuiz>
  );
};

const TheQuiz = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  hr {
    background: darkgray;
    height: 0.1rem;
    width: 100%;
  }
  h1 {
    font-weight: 500;
    letter-spacing: 0.2rem;
  }
  h3 {
    font-weight: 500;
    line-height: 1.5rem;
  }
  .quiz-container {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 1.5rem;
    border-radius: 0.4rem;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      gap: 1.5rem;
      width: 100%;
      li {
        list-style: none;
        border: 1px solid darkgray;
        width: 100%;
        padding: 0.8rem;
        border-radius: 0.4rem;
        border-radius: 0.4rem;
        cursor: pointer;
      }
      .correct {
        border: 2px solid lightgreen;
        background: #d0fad0;
      }
      .wrong {
        border: 2px solid lightred;
        background: #fad0d0;
      }
    }
    button {
      width: 30%;
      padding: 0.4rem;
      margin: auto;
      font-size: 1rem;
      border-radius: 0.4rem;
      background: lightgray;
      border: 1px solid lightgray;
      cursor: pointer;
      transition: 400ms all ease;
      &:hover {
        border: 1px solid gray;
      }
    }
    .index {
      margin: auto;
      font-size: 0.8rem;
    }
  }
  .scoreCard {
    margin: auto;
    font-weight: 500;
    letter-spacing: 0;
  }
`;
export default Quiz;

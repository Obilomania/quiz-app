import { useState } from "react";
import styled from "styled-components";
import { questions } from "../../assets/questions";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [theQuestions, setTheQuestions] = useState(questions[index]);

  const checkAnswer = (e, answer) => {
    if (theQuestions.answer === answer) {
      e.target.classList.add("correct");
    } else {
      e.target.classList.add("wrong");
    }
  };
  console.log(theQuestions);
  return (
    <TheQuiz>
      <div className="quiz-container">
        <h1 className="main-header">QUIZ APP</h1>
        <hr />
        <h3>
          {index + 1}. &nbsp; {theQuestions.question}
        </h3>
        <ul>
          <li onClick={(e) => checkAnswer(e, 1)}>{theQuestions.firstOption}</li>
          <li onClick={(e) => checkAnswer(e, 2)}>
            {theQuestions.secondOption}
          </li>
          <li onClick={(e) => checkAnswer(e, 3)}>{theQuestions.thirdOption}</li>
          <li onClick={(e) => checkAnswer(e, 4)}>{theQuestions.forthOption}</li>
          <li onClick={(e) => checkAnswer(e, 5)}>{theQuestions.fifthOption}</li>
        </ul>
        <button>Next</button>
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
      transition: 400ms all ease;
      &:hover {
        border: 1px solid gray;
      }
    }
  }
`;
export default Quiz;

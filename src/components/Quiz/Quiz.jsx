import styled from "styled-components";

const Quiz = () => {
  return (
    <TheQuiz>
      <div className="quiz-container">
        <h1 className="main-header">QUIZ APP</h1>
        <hr />
        <h3>
          1. Who is responsible for creating and designing the client side of a web
          app?
        </h3>
        <ul>
          <li>Front End Developer</li>
          <li>Back End Developer</li>
          <li>DevOps</li>
          <li>Cyber Security</li>
          <li>Poject Manager</li>
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

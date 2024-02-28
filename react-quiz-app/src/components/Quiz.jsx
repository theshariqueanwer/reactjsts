import React, { useCallback, useState } from "react";

import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

function Quiz() {
  // this ref also should be move to the Answers Component
  //   const shuffledAnswers = useRef();
//   const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  // const [shuffledAnswerState, setShuffledAnswerState] = useState([]); // we do not to use and avoids

    const activeQuestionIndex = userAnswers.length;
//   const activeQuestionIndex =
//     answerState === "" ? userAnswers.length : userAnswers.length - 1;

  // This two lines will go after the if block down there
  // const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  // shuffledAnswers.sort(() => Math.random() - 0.5);
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  // function handleSelectAnswer(selectedAnswer) {
  //  setUserAnswers((previousUserAnswer) => {
  //     return [...previousUserAnswer, selectedAnswer];
  //  });
  // }

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
    //   setAnswerState("answered");
      setUserAnswers((previousUserAnswer) => {
        return [...previousUserAnswer, selectedAnswer];
      });

    //   setTimeout(() => {
    //     if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
    //       setAnswerState("correct");
    //     } else {
    //       setAnswerState("wrong");
    //     }

    //     setTimeout(() => {
    //       setAnswerState("");
    //     }, 2000);
    //   }, 1000);

    },
    // [activeQuestionIndex]
    []
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />
  }

  // This two line will come after the if block
  //   shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
  //   shuffledAnswers.current.sort(() => Math.random() - 0.5);

  // shuffling logic now should be in the Answers Component
  //   if(!shuffledAnswers.current) {
  //     shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
  //     shuffledAnswers.current.sort(() => Math.random() - 0.5);
  //   }

  return (
    <div id="quiz">
      {/* <div id="question"> */}

      {/* <h1>Current Active Question</h1>
        <h2>Timer is running...</h2> */}

      {/* <QuestionTimer OnTimeout={() => handleSelectAnswer(null)} timeout={10000} /> */}

      {/* <QuestionTimer
          key={activeQuestionIndex}
          OnTimeout={handleSkipAnswer}
          timeout={10000}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2> */}

      {/* ------------------------------------------------------------------------------------- */}
      {/* <ul id="answers"> */}

      {/* {QUESTIONS[activeQuestionIndex].answers.map((answer) => ( */}

      {/* {shuffledAnswers.map((answer) => (
            <li className="answer" key={answer}>
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))} */}

      {/* {shuffledAnswers.current.map((answer) => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
            let cssClass = "";

            if (answerState === "answered" && isSelected) {
              cssClass = "selected";
            }
            if (
              (answerState === "correct" || answerState === "wrong") &&
              isSelected
            ) {
              cssClass = answerState;
            }

            return (
              <li className="answer" key={answer}>
                <button
                  onClick={() => handleSelectAnswer(answer)}
                  className={cssClass}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul> */}
      {/* ------------------------------------------------------------------------------------- */}

      {/* <Answers
          key={activeQuestionIndex}
          answers={QUESTIONS[activeQuestionIndex].answers}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          answerState={answerState}
          onSelect={handleSelectAnswer}
        /> */}

      {/* </div> */}

      {/* <Question
        key={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSelectAnswer={handleSelectAnswer}
      /> */}

      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleSelectAnswer}
      />

    </div>
  );
}

export default Quiz;

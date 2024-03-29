import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {

  const timer = useRef();
  const dialog = useRef();
  
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  const resultScore = timeRemaining <= 0;

  if(timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
    setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10); 
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} ref={dialog} />
      <section className="challenge">
        <h2>{title}</h2>
        {/* { resultScore ? <p>You Lost!</p> : <p>You Won!</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is Running..." : "Time is inactive"}
        </p>
      </section>
    </>
  );
}

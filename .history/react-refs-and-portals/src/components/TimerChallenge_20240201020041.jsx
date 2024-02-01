import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {

  const timer = useRef();
  const dialog = useRef();
  
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  function handleStart() {
    timer.current = setInterval(() => {
    setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10); 
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
  }

  return (
    <>

      {/* {timerExpired && (
        <ResultModal ref={dialog} result="Lost" targetTime={targetTime} />
      )} */}
      {/* <ResultModal ref={dialog} result="Lost" targetTime={targetTime} /> */}

      <ResultModal result="Won!" targetTime={targetTime} ref={dialog} />

      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You Lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is Running..." : "Time is inactive"}
        </p>
      </section>

    </>
  );
}

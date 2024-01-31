import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

// let timer;   // here also this is not the solution 
// so we can make use of useRef 

export default function TimerChallenge({title, targetTime}) {
  // let timer;   // here also this is not the solution

  const timer = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    // setTimerStarted(true) // we write here or down below

    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true); // we write here or up before
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      {timerExpired && <ResultModal result="Lost" targetTime={targetTime} />}
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>You Lost!</p>} */}
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
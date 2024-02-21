import React, { useEffect, useState } from "react";
import { TIMER } from "./DeleteConfirmation";

// function Progress() {
function Progress({ timer }) {
  // const [remainingTime, setRemainingTime] = useState(TIMER);
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval");
      setRemainingTime((prevStateRemainingTime) => prevStateRemainingTime - 10);
    }, 10);

    return () => {
      console.log("Cleaning up the timer interval");
      clearInterval(interval);
    };
  }, []);

  // return <progress value={remainingTime} max={TIMER} />;
  return <progress value={remainingTime} max={timer} />;
}

export default Progress;

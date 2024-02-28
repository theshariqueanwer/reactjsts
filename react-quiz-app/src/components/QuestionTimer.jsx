import React, { useEffect, useState } from "react";
import Progress from "./Progress";

const TIMER = 8000;

function QuestionTimer({ timeout, OnTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  // setTimeout(() => {
  //     OnTimeout();
  // }, timeout)

  // we need to put this code in useEffect because of below useEffect
  // setting state in every 100 milliseconds so component will run every 100 milliseconds
  // so we need to put this code in useEffect for better performance in down there
  // in more shot way
  // setTimeout(OnTimeout, timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timeOut = setTimeout(OnTimeout, timeout);
    return () => clearTimeout(timeOut);
  }, [timeout, OnTimeout]);

  // This will lead to infinite interval so make use of useEffect
  //   setInterval(() => {
  //     setRemainingTime((prevRemainingTime) => {
  //         return prevRemainingTime - 100;
  //     });
  //   }, 100);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        return prevRemainingTime - 100;
      });
    }, 100);

    // return () => {
    //     console.log("Clearing the interval");
    //     clearInterval(interval);
    // }

    // in more shot way
    return () => clearInterval(interval);
  }, []);

  // This useEffect for demo purpose for understanding
  //   useEffect(() => {
  //     const timeOut = setTimeout(() => {
  //       OnTimeout();
  //     }, timeout);

  //     return () => {
  //       console.log("Cleaning up the timer");
  //       clearTimeout(timeOut);
  //     };

  //     const interval = setInterval(() => {
  //       console.log("Interval");
  //       setRemainingTime((prevStateRemainingTime) => prevStateRemainingTime - 10);
  //     }, 10);

  //     return () => {
  //       console.log("Cleaning up the timer interval");
  //       clearInterval(interval);
  //     };

  //   }, []);

  return (
    <div>
      <Progress remainingTime={remainingTime} timeout={timeout} mode={mode} />
    </div>
  );
}

export default QuestionTimer;

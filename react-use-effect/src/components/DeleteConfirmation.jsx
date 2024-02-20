import { useEffect, useState } from "react";
import Progress from "./Progress";

export const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {

  // const [remainingTime, setRemainingTime] = useState(TIMER);


  // there is a problem so we can make use of useEffect for better
  // setInterval(() => {
  //   setRemainingTime(prevStateRemainingTime => prevStateRemainingTime - 10 );
  // }, 10)

  // useEffect(() => {

  //   const interval = setInterval(() => {
  //     console.log("Interval");
  //     setRemainingTime(prevStateRemainingTime => prevStateRemainingTime - 10 );
  //   }, 10);

  //   return () => {
  //     console.log('Cleaning up the timer interval')
  //     clearInterval(interval);
  //   };

  // }, [])

  // There is a problem with timer function after cancel also timer not stopping
  // console.log("Timer Set")
  // setTimeout(() => {
  //   onConfirm();
  // }, 3000);

  useEffect(() => {
    console.log("Timer Set")
    // setTimeout(() => {
    //   onConfirm();
    // }, 3000);

    const timer = setTimeout(() => {
      onConfirm();
    // }, 3000);
    }, TIMER);

    return () => {
      console.log('Cleaning up the timer')
      clearTimeout(timer);
    };
  }, [onConfirm])

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      {/* <progress value={remainingTime} max={TIMER} /> */}
      {/* <Progress /> */}
      <Progress timer={TIMER} />
    </div>
  );
}

import { forwardRef, useImperativeHandle, useRef } from "react"

const ResultModal = forwardRef( function ResultModal( { targetTime, remainingTime, onReset }, ref ) {
// const ResultModal = forwardRef( function ResultModal( props, ref ) {

    const dialog = useRef();

    const userLost = remainingTime <= 0;

    const formattedRemainingTime = (remainingTime / 1000).toFixed( 2 );

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    }) 

    return (
    //   <dialog ref={ref} className="result-modal">   // it used before when there was no useRef as dialog
      <dialog ref={dialog} className="result-modal">
        {userLost && <h2>You Lost!</h2>}
        <p>
          The Target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
          You stopped the timer <strong>{remainingTime / 1000} seconds left.</strong>
        </p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    );
})

export default ResultModal
import { forwardRef, useImperativeHandle, useRef } from "react"

const ResultModal = forwardRef( function ResultModal( { targetTime, remainingTime, onReset }, ref ) {
// const ResultModal = forwardRef( function ResultModal( props, ref ) {

    const dialog = useRef();

    const resultScore = remainingTime <= 0;

    const formattedRemainingTime = (remainingTime / 1000).toFixed( 2 );

    const score = Math.round(( 1 - remainingTime / ( targetTime * 1000 ) ) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    }) 

    return (
      <dialog ref={dialog} className="result-modal">
        {resultScore ? <h2>You Lost!</h2> : <h2>You Won!</h2>}
        {!resultScore && <h2>Your Score : {score}</h2>}
        <p>
          The Target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
          You stopped the timer <strong>{formattedRemainingTime} seconds left.</strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>
    );
})

export default ResultModal
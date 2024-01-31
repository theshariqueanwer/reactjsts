import { forwardRef } from "react"

const ResultModal = forwardRef( function ResultModal( { result, targetTime}, ref ) {
// const ResultModal = forwardRef( function ResultModal( props, ref ) {
    return (
      <dialog ref={ref} className="result-modal" open>
        <h2>You {result}</h2>
        <p>
          The Target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
          You stopped the timer <strong>x seconds left.</strong>
        </p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    );
})

export default ResultModal
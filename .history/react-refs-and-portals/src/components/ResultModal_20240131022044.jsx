import { forwardRef, useImperativeHandle, useRef } from "react"

const ResultModal = forwardRef( function ResultModal( { result, targetTime}, ref ) {
// const ResultModal = forwardRef( function ResultModal( props, ref ) {

    const dialog = useRef();


    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    }) 




    return (
    //   <dialog ref={ref} className="result-modal">
      <div ref={dialog} className="result-modal">
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
      </div>
    );
})

export default ResultModal
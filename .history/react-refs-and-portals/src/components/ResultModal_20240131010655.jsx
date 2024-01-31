export default function ResultModal({result, targetTime}) {
    return <dialog className="result-modal" >
        <h2>You {result}</h2>
        <p>The Target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer <strong>x seconds left.</strong></p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
}
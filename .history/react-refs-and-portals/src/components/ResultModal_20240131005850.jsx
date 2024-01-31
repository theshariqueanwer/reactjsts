export default function ResultModal({result, targetTime}) {
    return <dialog>
        <h2>You {result}</h2>
        <p>The Target time was <strong>{targetTime} seconds</strong></p>
    </dialog>
}
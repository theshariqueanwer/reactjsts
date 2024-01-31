export default function TimerChallenge({title, targetTime}) {

    function handleStart() {
        setTimeout( () => {}, 1000)
    }
    return <section className="challenge" >
        <h2>{title}</h2>
        <p className="challenge-time" >
            {targetTime} second{ targetTime > 1 ? 's': '' }
        </p>
        <p>
            <button>
                Start Challenge
            </button>
        </p>
        <p className="" >
            Time is Running... / Time is inactive
        </p>
    </section>
}
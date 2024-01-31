export default function TimerChallenge({title, targetTime}) {
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
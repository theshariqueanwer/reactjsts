import { useState } from "react";

export default function TimerChallenge({title, targetTime}) {


    const [timeExpired, setTimeExpired] = useState(false)

    function handleStart() {
        setTimeout( () => {
            setTimeExpired(true)
        }, targetTime * 1000 );
    }
    return <section className="challenge" >
        <h2>{title}</h2>
        {timeExpired && <p>You Lost!</p>}
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
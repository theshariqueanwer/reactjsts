import { useState } from "react";

export default function TimerChallenge({title, targetTime}) {


    const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)

    function handleStart() {
        // setTimerStarted(true) // we write here or down below

        setTimeout( () => {
            setTimerExpired(true)
        }, targetTime * 1000 );

        setTimerStarted(true) // we write here or up before
    }
    return <section className="challenge" >
        <h2>{title}</h2>
        {timerExpired && <p>You Lost!</p>}
        <p className="challenge-time" >
            {targetTime} second{ targetTime > 1 ? 's': '' }
        </p>
        <p>
            <button onClick={handleStart}>  
                { timerStarted ? 'Stop' : 'Start' } Challenge
            </button>
        </p>
        <p className={timerStarted ? 'active' : undefined } >
            { timerStarted ? 'Time is Running...' : 'Time is inactive' }
        </p>
    </section>
}
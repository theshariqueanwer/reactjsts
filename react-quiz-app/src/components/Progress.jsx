import React from 'react'

function Progress({remainingTime, timeout, mode}) {
  return (
    <progress id='question-time' value={remainingTime} max={timeout} className={mode} />
  )
}

export default Progress

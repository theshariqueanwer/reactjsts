import { useRef, useState } from "react";

export default function PlayerWithRefWithoutState() {

  const playerName = useRef();

  function handleClick() {
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {playerName.current ? playerName.current.value : "unknown entity"}</h2>
      <p>
        <input
          type="text"
          ref={playerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

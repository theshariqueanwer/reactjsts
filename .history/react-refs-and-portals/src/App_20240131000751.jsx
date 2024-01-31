import Player from './components/Player.jsx';
import PlayerWithRef from './components/PlayerWithRef.jsx';
import PlayerWithRefWithoutState from './components/PlayerWithRefWithoutState.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      {/* <Player /> */}
      <PlayerWithRef />
      {/* <PlayerWithRefWithoutState /> */}
      <div id="challenges">
        <TimerChallenge />
      </div>
    </>
  );
}

export default App;

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
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not Easy" targetTime={5} />
        <TimerChallenge title="Getting Tough" targetTime={10} />
        <TimerChallenge title="Pros Only" targetTime={15} />
      </div>
    </>
  );
}

export default App;

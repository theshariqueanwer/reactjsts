import Player from './components/Player.jsx';
import PlayerWithRef from './components/PlayerWithRef.jsx';
import PlayerWithRefWithoutState from './components/PlayerWithRefWithoutState.jsx';

function App() {
  return (
    <>
      {/* <Player /> */}
      {/* <PlayerWithRef /> */}
      <PlayerWithRefWithoutState />
      <div id="challenges"></div>
    </>
  );
}

export default App;

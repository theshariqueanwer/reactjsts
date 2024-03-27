import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import RefLogin from './components/RefLogin.jsx';
import SignUp from './components/SignUp.jsx';
import StateLogin from './components/StateLogin.jsx';
import StateLoginMain from './components/StateLoginMain.jsx';
import StateLoginUseInput from './components/StateLoginUseInput.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Login /> */}
        {/* <StateLogin /> */}
        <StateLoginUseInput />
        {/* <StateLoginMain /> */}
        {/* <RefLogin /> */}
        {/* <SignUp /> */}
      </main>
    </>
  );
}

export default App;

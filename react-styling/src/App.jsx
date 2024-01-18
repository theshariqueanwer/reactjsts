import OrignalAuthInputsStyledComponent from './components/OrignalAuthInputsStyledComponent.jsx';
import OrignalAuthInputs from './components/OrignalAuthInputs.jsx';
import OrignalHeader from './components/OrignalHeader.jsx';
import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';
import CreateInputs from './components/CreateInputs.jsx';

export default function App() {
  return (
    <>
      <Header />
      {/* <OrignalHeader /> */}
      <main>
        <CreateInputs />
        <AuthInputs />
        {/* <OrignalAuthInputs /> */}
        {/* <OrignalAuthInputsStyledComponent /> */}
      </main>
    </>
  );
}

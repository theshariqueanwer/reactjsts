import OrignalAuthInputsStyledComponent from './components/OrignalAuthInputsStyledComponent.jsx';
import OrignalAuthInputs from './components/OrignalAuthInputs.jsx';
import OrignalHeader from './components/OrignalHeader.jsx';
import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';
import CreateInputs from './components/CreateInputs.jsx';
import CreateInput from './components/CreateInput.jsx';
import AuthInputsStyledComponents from './components/AuthInputs-Styled_Components.jsx';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Header />
      {/* <OrignalHeader /> */}
      <main>
        {/* <CreateInputs /> */}
        {/* <CreateInput /> */}
        <AuthInputs />
        {/* <AuthInputsStyledComponents /> */}
        {/* <OrignalAuthInputs /> */}
        {/* <OrignalAuthInputsStyledComponent /> */}
      </main>
    </>

    // <>
    //   <BrowserRouter>
    //     <Header />
    //     <main>
    //     <Routes>
    //         <Route path="/" element={ <AuthInputs/> } />
    //         <Route path="/authinputs" element={ <AuthInputs/> } />
    //         <Route path="/createinputs" element={ <CreateInputs/> } />
    //     </Routes>
    //     </main>
    //   </BrowserRouter>
    // </>
  );
}

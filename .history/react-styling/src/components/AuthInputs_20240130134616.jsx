import { useState } from 'react';
import {styled} from 'styled-components'
import Button from './Button';
import Enter from './Enter';
import Entering from './Entering';
import CreateInputs from './CreateInputs';
import CustomLabelAndInput from './CustomLabelAndInput';
// import { useNavigate } from "react-router-dom"

// const ControlContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  // const navigate = useNavigate();

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  function handleRegister() {
    // navigate("/createinputs")
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  const emailContains = enteredEmail.includes('@')
  const passwordContains = enteredPassword.includes('@')
  const emailValid = enteredEmail.includes('.com') || enteredEmail.includes('.in');
  const passwordValid = enteredPassword.trim().length > 6 && enteredPassword.trim().length <= 12;

  return (
    <div id="auth-inputs" className='w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-slate-800'>
      <div>
        <CustomLabelAndInput
          label="Email"
          type="email"
          // style={{
          //   'background-color': emailNotValid ? '#f87171' : '#d1d5db',
          // }}
          // className={emailNotValid ? 'invalid' : undefined}
          // className={` ${ emailNotValid ? 'invalid' : undefined } ${ enteredEmail ? 'entering' : undefined } ${ emailValid ? 'valid' : undefined } `}
          invalid={emailNotValid} entering={enteredEmail} contains={emailContains} valid={emailValid}
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
        {!enteredEmail && submitted ? <Enter message="plese enter the email" /> : undefined}
        {enteredEmail && emailNotValid ? <Entering message="plese enter the valid email" /> : undefined}
        <CustomLabelAndInput
          label="Password"
          type="password"
          // style={{
          //   backgroundColor: passwordNotValid ? '#f87171' : '#d1d5db',
          // }}
          // className={passwordNotValid ? 'invalid' : undefined}
          // className={` ${ passwordNotValid ? 'invalid' : undefined } ${ enteredPassword ? 'entering' : undefined } ${ passwordValid ? 'valid' : undefined } `}
          invalid={passwordNotValid} entering={enteredPassword} contains={passwordContains} valid={passwordValid}
          onChange={(event) => handleInputChange('password', event.target.value)}
        />
        {!enteredPassword && submitted ? <Enter message="plese enter the password" /> : undefined}
        {enteredPassword && passwordNotValid ? <Entering message="plese enter the valid password" /> : undefined}
      </div>
      <div className="actions">
        <button type="button" className="text-button" onClick={handleRegister} >Create a new account</button>
        {/* <button className='button' onClick={handleLogin}>Sign In</button> */}
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}

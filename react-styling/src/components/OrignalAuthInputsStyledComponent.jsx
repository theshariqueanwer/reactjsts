import { useState } from 'react';
import {styled} from 'styled-components'

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  // color: #6b7280;
  color: ${({ $invalid, $valid }) => ($invalid ? '#f87171' : '#6b7280', $valid ? '#10ca10' : `${$invalid ? '#f87171' : '#6b7280'}`) };
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  // background-color: '#d1d5db'
  // background-color: ${({ $invalid, $entering, $valid }) => ($invalid ? '#f87171' : '#d1d5db', $entering ? '#fed2d2' : `${$invalid ? '#f87171' : '#d1d5db'}`, $valid ? '#ffe0e0' : `${$entering ? '#fed2d2' : `${$invalid ? '#f87171' : '#d1d5db'}`}` )};
  // background-color: ${({ $invalid, $entering, $contains, $valid }) => ($invalid ? '#f87171' : '#d1d5db', $entering ? '#fed2d2' : `${$invalid ? '#f87171' : '#d1d5db'}`, $valid ? '#ffe0e0' : `${$entering ? `${$contains ? '#d1d5db' : `${$entering ? '#fed2d2' : `${$invalid ? '#f87171' : '#d1d5db'}`}`}` : `${$invalid ? '#f87171' : '#d1d5db'}`}` )};
  background-color: ${({ $invalid, $entering, $contains, $valid }) => ($invalid ? '#f87171' : '#d1d5db', $entering ? '#fed2d2' : `${$invalid ? '#f87171' : '#d1d5db'}`, $valid ? '#ffe0e0' : `${$entering ? `${$contains ? '#d1d5db' : `${$entering ? '#fed2d2' : `${$invalid ? '#f87171' : '#d1d5db'}`}`}` : `${$invalid ? '#f87171' : '#d1d5db'}`}` )};
  // color: #374151;
  color: ${({ $invalid, $valid }) => ($invalid ? '#ef4444' : '#374151', $valid ? '#30ec0b' : `${$invalid ? '#ef4444' : '#374151'}` ) };
  // border: 1px solid transparent;
  border: 2px solid ${({ $invalid, $valid }) => ($invalid ? '#f73f3f' : 'transparent', $valid ? '#2bec04' : `${$invalid ? '#f73f3f' : 'transparent'}` ) };
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`

const Button = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;

  &:hover {
    background-color: #f0920e;
  }

`

export default function OrignalAuthInputsStyledComponent() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

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

  const enterEmail = <p className='enter' >plese enter the email</p>
  const enterValidEmail = <p className='entering' >plese enter the valid email</p>

  const enterPassword = <p className='enter' >plese enter the password</p>
  const enterValidPassword = <p className='entering' >plese enter the valid password</p>

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  const emailContains = enteredEmail.includes('@')
  const passwordContains = enteredPassword.includes('@')
  const emailValid = enteredEmail.includes('.com') || enteredEmail.includes('.in');
  const passwordValid = enteredPassword.trim().length > 6 && enteredPassword.trim().length <= 12;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        {/* <p>
          <header>
            <h2 className="header-form">LOGIN</h2>
          </header>
        </p> */}
        <p>
          {/* <label className={` label ${ emailNotValid ? 'invalid' : undefined } ${ emailValid ? 'valid' : undefined } `} >Email</label> */}
          <Label $invalid={emailNotValid} $valid={emailValid} >Email</Label>
          <Input
            type="email"
            // style={{
            //   'background-color': emailNotValid ? '#f87171' : '#d1d5db',
            // }}
            // className={emailNotValid ? 'invalid' : undefined}
            // className={` ${ emailNotValid ? 'invalid' : undefined } ${ enteredEmail ? 'entering' : undefined } ${ emailValid ? 'valid' : undefined } `}
            $invalid = {emailNotValid} $entering = {enteredEmail} $contains = {emailContains} $valid = {emailValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        { !enteredEmail && submitted ? enterEmail : undefined }
        { enteredEmail && emailNotValid ? enterValidEmail : undefined }
        <p>
          {/* <Label className={` label ${ passwordNotValid ? 'invalid' : undefined } ${ passwordValid ? 'valid' : undefined } `} >Password</Label> */}
          <Label $invalid={passwordNotValid} $valid={passwordValid} >Password</Label>
          <Input
            type="password"
            // style={{
            //   backgroundColor: passwordNotValid ? '#f87171' : '#d1d5db',
            // }}
            // className={passwordNotValid ? 'invalid' : undefined}
            // className={` ${ passwordNotValid ? 'invalid' : undefined } ${ enteredPassword ? 'entering' : undefined } ${ passwordValid ? 'valid' : undefined } `}
            $invalid = {passwordNotValid} $entering = {enteredPassword} $contains = {passwordContains} $valid = {passwordValid}
            onChange={(event) => handleInputChange('password', event.target.value)}
          />
        </p>
        { !enteredPassword  && submitted ? enterPassword : undefined }
        { enteredPassword && passwordNotValid ? enterValidPassword : undefined }
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">Create a new account</button>
        {/* <button className='button' onClick={handleLogin}>Sign In</button> */}
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}

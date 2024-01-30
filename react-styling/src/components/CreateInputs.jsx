import { useState } from 'react';
import {styled} from 'styled-components'
import Button from './Button';
import CustomeLabelAndInput from './LabelAndInput';
import Enter from './Enter';
import Entering from './Entering';
import AuthInputs from './AuthInputs';
// import { useNavigate } from "react-router-dom"

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

export default function CreateInputs() {
  const [enteredFullName, setEnteredFullName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredMobileNumber, setEnteredMobileNumber] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  // const navigate = useNavigate();

  function handleInputChange(identifier, value) {
    if (identifier === 'full-name') {
        setEnteredFullName(value);
    } if (identifier === 'email') {
      setEnteredEmail(value);
    } if (identifier === 'username') {
        setEnteredUsername(value);
    } if (identifier === 'mobile-number') {
        setEnteredMobileNumber(value);
    } if (identifier === 'password') {
        setEnteredPassword(value);
    } else {
      setEnteredConfirmPassword(value);
    }
  }

  function handleRegister() {
    setSubmitted(true);
  }

  function handleLogin() {
    // <AuthInputs />
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  const emailContains = enteredEmail.includes('@')
  const passwordContains = enteredPassword.includes('@')
  const emailValid = enteredEmail.includes('.com') || enteredEmail.includes('.in');
  const passwordValid = enteredPassword.trim().length > 6 && enteredPassword.trim().length <= 12;

  return (
    <div id="auth-inputs">
      <ControlContainer>

        <CustomeLabelAndInput
          label="Full Name"
          type="text"
          $invalid={emailNotValid} $entering={enteredEmail} $contains={emailContains} $valid={emailValid}
          onChange={(event) => handleInputChange('full-name', event.target.value)}
        />
        {!enteredEmail && submitted ? <Enter message="plese enter the full name" /> : undefined}
        {enteredEmail && emailNotValid ? <Entering message="plese enter the valid full name" /> : undefined}
        
        <CustomeLabelAndInput
          label="Email"
          type="email"
          $invalid={emailNotValid} $entering={enteredEmail} $contains={emailContains} $valid={emailValid}
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
        {!enteredEmail && submitted ? <Enter message="plese enter the email" /> : undefined}
        {enteredEmail && emailNotValid ? <Entering message="plese enter the valid email" /> : undefined}

        <CustomeLabelAndInput
          label="Username"
          type="text"
          $invalid={emailNotValid} $entering={enteredEmail} $contains={emailContains} $valid={emailValid}
          onChange={(event) => handleInputChange('username', event.target.value)}
        />
        {!enteredEmail && submitted ? <Enter message="plese enter the username" /> : undefined}
        {enteredEmail && emailNotValid ? <Entering message="plese enter the valid username" /> : undefined}

        <CustomeLabelAndInput
          label="Mobile Number"
          type="number"
          $invalid={emailNotValid} $entering={enteredEmail} $contains={emailContains} $valid={emailValid}
          onChange={(event) => handleInputChange('mobile-number', event.target.value)}
        />
        {!enteredEmail && submitted ? <Enter message="plese enter the mobile number" /> : undefined}
        {enteredEmail && emailNotValid ? <Entering message="plese enter the valid mobile number" /> : undefined}

        <CustomeLabelAndInput
          label="Password"
          type="password"
          $invalid={passwordNotValid} $entering={enteredPassword} $contains={passwordContains} $valid={passwordValid}
          onChange={(event) => handleInputChange('password', event.target.value)}
        />
        {!enteredPassword && submitted ? <Enter message="plese enter the password" /> : undefined}
        {enteredPassword && passwordNotValid ? <Entering message="plese enter the valid password" /> : undefined}

        <CustomeLabelAndInput
          label="Confirm Password"
          type="password"
          $invalid={passwordNotValid} $entering={enteredPassword} $contains={passwordContains} $valid={passwordValid}
          onChange={(event) => handleInputChange('confirm-password', event.target.value)}
        />
        {!enteredPassword && submitted ? <Enter message="plese enter the confirm password" /> : undefined}
        {enteredPassword && passwordNotValid ? <Entering message="plese enter the valid confirm password" /> : undefined}
        {enteredPassword && passwordNotValid ? <Entering message="password and confirm password are not match" /> : undefined}


      </ControlContainer>
      <div className="actions">
        <button type="button" onClick={handleLogin} className="text-button">Login to a account</button>
        <Button onClick={handleRegister}>Sign Un</Button>
      </div>
    </div>
  );
}

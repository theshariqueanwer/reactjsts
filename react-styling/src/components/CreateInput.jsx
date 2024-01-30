  import { useState } from 'react';
  import {styled} from 'styled-components'
  import Button from './Button';
  import CustomeLabelAndInput from './LabelAndInput';
  import Enter from './Enter';
  import Entering from './Entering';
  import {  } from './regxpattern'
  
  const ControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  `
  
  export default function CreateInput() {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    function handleInputChange(identifier, value) {
      if (identifier === 'name') {
        setEnteredName(value);
      } if (identifier === 'email') {
        setEnteredEmail(value);
      } if (identifier === 'phone') {
        setEnteredPhone(value);
      } if (identifier === 'username') {
        setEnteredUsername(value);
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
      // navigate("/authinputs")
    }

  
    const nameNotValid = submitted && !enteredName.includes('abcdefghijklmnopqrstuvwxyz');
    const emailNotValid = submitted && !enteredEmail.includes('@');
    const phoneNotValid = submitted && !enteredPhone.match('[0-9]{10}')
    const usernameNotValid = submitted && !enteredUsername.match('[A-Za-z0-9@]')
    const passwordNotValid = submitted && !enteredPassword.match('[A-Za-z0-9@]');
    const confirmPasswordNotValid = submitted && !enteredConfirmPassword.match('[A-Za-z0-9@]')
  
    const nameValid = enteredName.includes("abcdefghijklmnopqrstuvwxyz");
    const emailValid =  enteredEmail.includes('.com')
    const phoneValid = enteredPhone.match('[0-9]{10}')
    const usernameValid = enteredUsername.match('[A-Za-z0-9@]')
    const passwordValid = enteredPassword.trim().length <= 12;
    const confirmPasswordValid = enteredPassword.trim().length <= 12;

    const nameContains = enteredName.includes(" ")
    const emailContains = enteredEmail.includes('@')
    const phoneContains = enteredPhone.includes([0-9]);
    const usernameContains = enteredUsername.includes("@")
    const passwordContains = enteredPassword.includes('@')
    const confirmPasswordContains = enteredConfirmPassword.includes('@')
  
    return (
      <div id="auth-inputs">
        <ControlContainer>

          <CustomeLabelAndInput
            label="Full Name"
            type="text"
            invalid={nameNotValid} entering={enteredName} contains={nameContains} valid={nameValid}
            onChange={(event) => handleInputChange('name', event.target.value)}
          />
          { !enteredName && submitted ? <Enter message="plese enter the full name" /> : undefined}
          { enteredName && nameNotValid ? <Entering message="plese enter the valid full name" /> : undefined}

          <CustomeLabelAndInput
            label="Email"
            type="email"
            invalid={emailNotValid} entering={enteredEmail} contains={emailContains} valid={emailValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
          {!enteredEmail && submitted ? <Enter message="plese enter the email" /> : undefined}
          {enteredEmail && emailNotValid ? <Entering message="plese enter the valid email" /> : undefined}

          <CustomeLabelAndInput
            label="Phone"
            type="number"
            pattern="\d{3}[\-]\d{3}[\-]\d{4}"
            minlength="10" maxlength="10" id="mobile" name="mobile" title="enter 10 digit mobile number" required
            invalid={phoneNotValid} entering={enteredPhone} contains={phoneContains} valid={phoneValid}
            onChange={(event) => handleInputChange('phone', event.target.value)}
          />
          {!enteredPhone && submitted ? <Enter message="plese enter the phone number" /> : undefined}
          {enteredPhone && phoneNotValid ? <Entering message="plese enter the valid phone number" /> : undefined}

          <CustomeLabelAndInput
            label="Username"
            type="text"
            invalid={usernameNotValid} entering={enteredUsername} contains={usernameContains} valid={usernameValid}
            onChange={(event) => handleInputChange('username', event.target.value)}
          />
          {!enteredUsername && submitted ? <Enter message="plese enter the username" /> : undefined}
          {enteredUsername && usernameNotValid ? <Entering message="plese enter the valid username" /> : undefined}

          <CustomeLabelAndInput
            label="Password"
            type="password"
            invalid={passwordNotValid} entering={enteredPassword} contains={passwordContains} valid={passwordValid}
            onChange={(event) => handleInputChange('password', event.target.value)}
          />
          {!enteredPassword && submitted ? <Enter message="plese enter the password" /> : undefined}
          {enteredPassword && passwordNotValid ? <Entering message="plese enter the valid password" /> : undefined}

          <CustomeLabelAndInput
            label="Confirm Password"
            type="password"
            invalid={confirmPasswordNotValid} entering={enteredConfirmPassword} contains={confirmPasswordContains} valid={confirmPasswordValid}
            onChange={(event) => handleInputChange('confirmpassword', event.target.value)}
          />
          {!enteredConfirmPassword && submitted ? <Enter message="plese enter the password" /> : undefined}
          {enteredConfirmPassword && confirmPasswordNotValid ? <Entering message="plese enter the valid confirm password" /> : undefined}
          {enteredPassword.match(enteredConfirmPassword) ? <Entering message="password and confirm password does not match try again!" /> : undefined }

        </ControlContainer>
        <div className="actions">
          <button type="button" className="text-button" onClick={handleRegister} >Create a new account</button>
          <Button onClick={handleLogin}>Sign In</Button>
        </div>
      </div>
    );
  }
  
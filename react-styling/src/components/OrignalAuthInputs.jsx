import { useState } from 'react';


export default function OrignalAuthInputs() {
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

    const emailValid = enteredEmail.includes('.com');
    const passwordValid = enteredPassword.trim().length > 6 && enteredPassword.trim().length <= 12;

    return (
        <div id="auth-inputs">
            <div className="controls">
                <p>
                    <label className={` label ${emailNotValid ? 'invalid' : undefined} ${emailValid ? 'valid' : undefined} `} >Email</label>
                    <input
                        type="email"
                        // style={{
                        //   'background-color': emailNotValid ? '#f87171' : '#d1d5db',
                        // }}
                        // className={emailNotValid ? 'invalid' : undefined}
                        className={` ${emailNotValid ? 'invalid' : undefined} ${enteredEmail ? 'entering' : undefined} ${emailValid ? 'valid' : undefined} `}
                        onChange={(event) => handleInputChange('email', event.target.value)}
                    />
                </p>
                {!enteredEmail && submitted ? enterEmail : undefined}
                {enteredEmail && emailNotValid ? enterValidEmail : undefined}
                <p>
                    <label className={` label ${passwordNotValid ? 'invalid' : undefined} ${passwordValid ? 'valid' : undefined} `} >Password</label>
                    <input
                        type="password"
                        // style={{
                        //   backgroundColor: passwordNotValid ? '#f87171' : '#d1d5db',
                        // }}
                        // className={passwordNotValid ? 'invalid' : undefined}
                        className={` ${passwordNotValid ? 'invalid' : undefined} ${enteredPassword ? 'entering' : undefined} ${passwordValid ? 'valid' : undefined} `}
                        onChange={(event) =>
                            handleInputChange('password', event.target.value)
                        }
                    />
                </p>
                {!enteredPassword && submitted ? enterPassword : undefined}
                {enteredPassword && passwordNotValid ? enterValidPassword : undefined}
            </div>
            <div className="actions">
                <button type="button" className="text-button">
                    Create a new account
                </button>
                <button className='button' onClick={handleLogin}>Sign In</button>
            </div>
        </div>
    );
}

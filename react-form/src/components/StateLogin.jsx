import { useState } from "react";
import Input from "./Input";
import { isEmail, isPassword, isNotEmpty, hasMinLength, isEqualsToOtherValue } from "../util/validation.js"

export default function StateLogin() {

  const [enteredValue, setEnteredValue] = useState({
    email: '',
    password: ''
  });

  // const [enteredValue, setEnteredValue] = useState({
  //   email: {
  //     value: '',
  //     didEdit: false
  //   },
  //   password: ''
  // });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  const [formIsInvalid, setFormIsInvalid] = useState(false);

  const {email, password} = enteredValue;

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitted!');
    console.log(email + ' ' + password);

    setEnteredValue({
      email: '',
      password: ''
    });
    
    // const emailIsValid = email.includes('@');
    // const passwordIsValid = password.length >= 8 && password.includes('@');
    // if(!emailIsValid && !passwordIsValid) {
    //   setFormIsInvalid(true);
    //   return;
    // }
    // setFormIsInvalid(false);
    // console.log("Sending HTTP request...");

    event.target.reset();
  }

  function handleInputChange(identifier, value) {
    setEnteredValue(prevValue => ({
      ...prevValue,
      [identifier]: value
    }));

    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false
    }))
  }

  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }))
  }

  // const emailIsInvalid = email !== '' && !email.includes('@');
  // const emailIsInvalid = didEdit.email && !email.includes('@');
  const emailIsInvalid = didEdit.email && !isEmail(email) && !isNotEmpty(email);

  // const passwordIsInvalid = didEdit.password && password.trim().length < 4 && !password.trim().includes('@');
  // const passwordIsInvalid = didEdit.password && !password.trim().length < 4 && !password.trim().includes('@');
  const passwordIsInvalid = 
    didEdit.password && 
    !hasMinLength(password, 4) && 
    !isPassword(password); 

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={email}
          error={emailIsInvalid && 'please enter a valid email'}
        />
        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>please enter a valid email</p>}
          </div>
        </div> */}

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(event) => handleInputChange("password", event.target.value)}
          value={password}
          error={passwordIsInvalid && 'please enter a valid password'}
        />
        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={password}
          />
          <div className="control-error">
            {passwordIsInvalid && <p>please enter a valid password</p>}
          </div>
        </div> */}
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

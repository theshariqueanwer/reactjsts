import { useState } from "react";

export default function StateLoginMain() {

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');

  const [enteredValue, setEnteredValue] = useState({
    email: '',
    password: ''
  });

  const {email, password} = enteredValue;

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitted!');
    // console.log('User Email: ' + enteredEmail);
    // console.log('User Password: ' + enteredPassword);
    // console.log(enteredValue);
    console.log(email + ' ' + password);


    setEnteredValue({
      email: '',
      password: ''
    });

  }
  function handleSubmission() {}

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value)
  // }

  // function handleInputChange(identifier, event) {
  //   setEnteredValue(prevValue => ({
  //     ...prevValue,
  //     [identifier]: event.target.value
  //   }));
  // }

  function handleInputChange(identifier, value) {
    setEnteredValue(prevValue => ({
      ...prevValue,
      [identifier]: value
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            // onChange={handleEmailChange}
            // onChange={(event) => handleInputChange("email", event)}
            onChange={(event) => handleInputChange("email", event.target.value)}
            // value={enteredEmail}
            // value={enteredValue.email}
            value={email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            // onChange={handlePasswordChange}
            // onChange={(event) => handleInputChange("password", event)}
            onChange={(event) => handleInputChange("password", event.target.value)}
            // value={enteredPassword}
            // value={enteredValue.password}
            value={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        {/* <button className="button" onClick={handleSubmit}>Login</button> */}
        <button className="button">Login</button>
      </p>
    </form>
  );
}

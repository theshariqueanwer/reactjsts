import { useState } from "react";
import Input from "./Input.jsx";
import { isEmail, isPassword, isNotEmpty, hasMinLength, hasMaxLength, isEqualsToOtherValue } from "../util/validation.js"
import { useInput } from "../hooks/useInput.js";

export default function StateLoginUseInput() {
  
  const {
    value: emailValue,
    hasError: emailHasError,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
  } = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value);
  });

  const {
    value: passwordValue,
    hasError: passwordHasError,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
  } = useInput("", (value) => isPassword(value) && isNotEmpty(value));

  const passwordMinLengthError = hasMinLength(passwordValue , 4);
  const passwordMaxLengthError = hasMaxLength(passwordValue, 12);

  function handleSubmit(event) {
    event.preventDefault();
    if(emailHasError || passwordHasError) {
      return;
    }
    console.log('Submitted!');
    console.log(emailValue + ' ' + passwordValue);

    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && 'please enter a valid email'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && 'please enter a valid password'}
        />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}

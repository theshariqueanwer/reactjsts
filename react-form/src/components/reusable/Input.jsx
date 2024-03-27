import React from "react";

function Input({label, id, type, name}) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        onBlur={() => handleInputBlur("email")}
        onChange={(event) => handleInputChange("email", event.target.value)}
        value={email}
      />
      <div className="control-error">
        {emailIsInvalid && <p>please enter a valid email</p>}
      </div>
    </div>
  );
}

export default Input;

import React from "react";

function Dropdown({ id, label, options, ...props }) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <select {...props} >
        {options.map((option, index) => (
          <option key={index} value={option} >
            {option}
          </option>
        ))}
      </select>
    </p>
  );
}
export default Dropdown;

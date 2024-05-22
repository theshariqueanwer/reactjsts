import React from "react";

function Select({ id, label, options, onSelect, className, ...props }) {
  function handleSelect(event) {
    onSelect(event.target.value);
  }
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <select onChange={handleSelect} {...props}>
        {options.map((option, index) => (
          <option key={index} value={option} className={className} {...props} >
            {option}
          </option>
        ))}
      </select>
    </p>
  );
}
export default Select;

import React from "react";

// function Button({ children, textOnly, className, type, onClick, ...props }) {
// function Button({ children, textOnly, className, type, ...props }) {
function Button({ children, textOnly, className, ...props }) {
  //   const cssClasses = textOnly ? `text-button ${className}` : "button";

  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + className;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;

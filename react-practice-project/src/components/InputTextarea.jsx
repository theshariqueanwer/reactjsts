import React from 'react'

function InputTextarea({label, type, ...props}) {
  return (
    <p>
        <label {...props}>{label}</label>
        <input type={type} {...props} />
    </p>
  )
}

export default InputTextarea

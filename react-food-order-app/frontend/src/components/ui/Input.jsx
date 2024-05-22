import React from 'react'

function Input({id, label, name, ...props}) {
  return (
    <p className='control'>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} {...props} required />
    </p>
  )
}
export default Input

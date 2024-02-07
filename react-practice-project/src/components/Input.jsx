import React from 'react'

function Input({type, ...props}) {
  return (
    <input type={type} {...props} />
  )
}

export default Input

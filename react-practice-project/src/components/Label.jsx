import React from 'react'

function Label({label, ...props}) {
  return (
    <label {...props}>{label}</label>
  )
}

export default Label

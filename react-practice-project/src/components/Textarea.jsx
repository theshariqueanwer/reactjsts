import React from 'react'

function Textarea({type, ...props}) {
  return (
    <textarea type={type} {...props} name="" id="" cols="30" rows="10"></textarea>
  )
}

export default Textarea

import React from 'react'

const Button = ({ active }) => {
  if (active)
    return <button className="button button-teal">Edit</button>

  return <button className="button button-purple">Submit</button>
}

export default Button
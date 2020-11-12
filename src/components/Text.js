import React from 'react'

const Text = ({ name, value }) => {
  return (
    <div>
      <div className="after">{name}</div>
      <p>{value}</p>
    </div>
  )
}

export default Text;
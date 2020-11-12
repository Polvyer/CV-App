import React from 'react'

const Title = ({ info, active }) => {
  if (active)
    return <h2 className="title">{info.charAt(0).toUpperCase() + info.slice(1)} info</h2>
  
  return <h2 className="title">Write your {info} info</h2>
}

export default Title
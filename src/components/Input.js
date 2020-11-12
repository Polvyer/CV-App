import React from 'react'

const Input = ({name, value, change, type}) => {
  return (
    <div>
      <label>
        <div className="before">{name}</div>
        <input className='input' name={name} type={type ? {type} : 'text'} value={value} onChange={change} required />
      </label>
    </div>
  )
}

export default Input;
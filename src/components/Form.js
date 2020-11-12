import React from 'react'
import Title from './Title'
import Input from './Input'
import Text from './Text'
import Button from './Button'

const Form = ({ info, submit, keys, values, callback, change, active, activeCallback }) => {
  
  const display = () => {
    if (active) {
      return keys.map(key => <Text key={key} name={key} value={values[key]} />)
    }

    return keys.map(key => <Input key={key} name={key} value={values[key]} change={change(values, callback)} />)
  }

  return (
    <form className='section form' onSubmit={submit(active, activeCallback)}>
      <Title info={info} active={active} />
      {display()}
      <Button active={active} />
    </form>
  )
}

export default Form;
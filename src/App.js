import React, { useState } from 'react'
import Form from './components/Form'
import './App.css'

function App() {
  const personalKeys = ['Name', 'Email', 'Phone number'] 
  const [ personalValues, setPersonalValues ] = useState(getInitialState(personalKeys))
  const [ personalButton, setPersonalButton ] = useState(false)

  const educationalKeys = ['School name', 'Title of study', 'Date of study']
  const [ educationalValues, setEducationalValues ] = useState(getInitialState(educationalKeys))
  const [educationalButton, setEducationalButton ] = useState(false)

  const workKeys = ['Company name', 'Position title', 'Tasks', 'From', 'To']
  const [ workValues, setWorkValues ] = useState(getInitialState(workKeys))
  const [ workButton, setWorkButton ] = useState(false)

  function getInitialState(keys) {
    return keys.reduce( (acc, curr) => {
      acc[curr] = ''
      return acc
    }, {})
  }

  const inputFunction = (values, callback) => e => {
    const newInfo = {
      ...values,
      [e.target.name]: e.target.value
    }
    callback(newInfo)
  }

  const submitFunction = (value, callback) => e => {
    e.preventDefault()
    callback(!value)
  }

  return (
    <div>
      <Form info='personal' submit={submitFunction} keys={personalKeys} values={personalValues} callback={setPersonalValues} change={inputFunction} active={personalButton} activeCallback={setPersonalButton} />
      <Form info='educational' submit={submitFunction} keys={educationalKeys} values={educationalValues} callback={setEducationalValues} change={inputFunction} active={educationalButton} activeCallback={setEducationalButton} />
      <Form info='work' submit={submitFunction} keys={workKeys} values={workValues} callback={setWorkValues} change={inputFunction} active={workButton} activeCallback={setWorkButton} />
    </div>
  )
}

export default App
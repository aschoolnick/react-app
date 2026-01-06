import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './Button'
import { Textbox } from './Textbox'
import { ButtonList } from './ButtonList'
import './App.css'

function App() {

  return (
    <>
      <Button color={"#286ab6"}/>
      <Button color={"#E83716"}/>
      <br/><br/>
      <Textbox/>
    </>
  )
}

export default App

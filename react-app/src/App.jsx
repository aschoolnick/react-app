import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './Button'
import { ButtonList } from './ButtonList'
import './App.css'

function App() {

  function notify(message) {
    alert(message);
  }

  return (
    <>
      <Button text={"Click Here"} color={"#286ab6"} notify={notify} message={"You clicked me!"}/>
      <Button text={"Click Here Too"} color={"#E83716"} notify={notify} message={"You clicked me too!"}/>
    </>
  )
}

export default App

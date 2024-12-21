import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todo.jsx'

function App() {
  
  return (
    <>
        <h1 className="text-3xl font-bold underline">

      Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
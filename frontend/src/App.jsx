import { useState } from 'react'
import './App.css'
import { Create_Todo } from './components/Create_Todo'
import { Todos } from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Create_Todo></Create_Todo>
      <Todos></Todos>
    </div>
  )
}

export default App

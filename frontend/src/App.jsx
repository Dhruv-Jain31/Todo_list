import { useState } from 'react'
import './App.css'
import { Create_Todo } from './components/Create_Todo'
import { Todos_Rerender } from './components/Todos_Rerender'

function App() {
  const [todos, setTodos] = useState([]); // since todo is a array

  fetch("http://localhost:3000/todos")
  .then(async function(response){
    const json = await response.json();
    setTodos(json.todos);
  })

  return (
    <div>
      <Create_Todo></Create_Todo>
      <Todos_Rerender></Todos_Rerender>
    </div>
  )
}

export default App

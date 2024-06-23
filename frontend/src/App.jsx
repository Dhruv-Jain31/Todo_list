import { useState } from 'react';
import './App.css';
import { Create_Todo } from './components/Create_Todo';
import { Todos_Rerender } from './components/Todos_Rerender';

function App() {
  const [todos, setTodos] = useState([]);
  const [fetched, setFetched] = useState(false);

  // sets the fetched function to be called once only. use effect hook is used popularly

  if (!fetched) {
    fetch("http://localhost:3000/todos")
      .then(async function(response) {

        const json = await response.json();
        setTodos(json.todo);
        setFetched(true); // ensure fetch only runs once
      })

      .catch((error) => {
        console.error('Error fetching todos:', error);
      });
  }

  return (
    <div>
      <Create_Todo></Create_Todo>
      <Todos_Rerender todos={todos}></Todos_Rerender>
    </div>
  );
}

export default App;

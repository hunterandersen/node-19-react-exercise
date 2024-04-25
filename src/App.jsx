import { useState } from 'react'
import './App.css'

function App() {
  //Declare the pieces of state
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState(["Ready", "Set", "GO"]);

  function handleSubmit(event) {
    event.preventDefault();
    //Update the list of items in our todoList
    setTodoList([...todoList, inputText]);
  }

  return (
    <>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput">Enter new task</label>
        <input 
          type="text" 
          name="todoInput" 
          id="todoInput" 
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <button>Add Task</button>
      </form>
      <ul>
        {todoList.map((element, index) => {
          return <li key={index}>{element}</li>
        })}
      </ul>
    </>
  )
}

export default App

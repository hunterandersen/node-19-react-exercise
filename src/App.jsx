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
    //Clearing the input after we've added the new task
    setInputText("");
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
      <ol>
        {todoList.map((element, index) => {
          return <li>
            <button onClick={() => {
              //Update our list (remove the item)
              const filteredList = todoList.filter((item, idx) => index != idx);
              setTodoList(filteredList);
            }}>X</button>
            <p key={index}>{element}</p>
          </li>
        })}
      </ol>
    </>
  )
}

export default App

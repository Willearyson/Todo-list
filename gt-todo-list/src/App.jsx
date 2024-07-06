import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("")
  const [textareaValue, setTextareaValue] = useState("")

  const [todos, setTodos] = useState([
   
  ])
  function handleAddNewTodo(event){
    event.preventDefault()
    setTodos((state) =>{
      const newTodo ={
        title:inputValue,
        description:textareaValue
      }
     return[...todos, newTodo]
    })

    setInputValue('')
    setTextareaValue('')
  }

  function removetodo(id){
    const newTodoList = todos.filter((todo) => todo.id !== id)
    setTodos(newTodoList)
  }


  return (
    <>
      <header>
        <h1>ToDo List</h1>
      </header>
      <main>
          <div className='form-area'>
            <form onSubmit={handleAddNewTodo} action="">
              <label htmlFor="">Tarefa</label>
              <input type="text" 
              className='todo-input' 
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              />
              <label htmlFor="">Descrição da tarefa</label>
              <textarea name="" id="" 
               value={textareaValue}
               onChange={(event) => setTextareaValue(event.target.value)}
              ></textarea>
              <button type='submmit'> Adicionar</button>
            </form>
            <div className='list-item-area'>
              <ul className='list-todo'>
                {todos?.map((todo, index) =>(
                  <li key={index}>
                    <input type="checkbox" onClick={() => removetodo(todo.id)}/>
                    <label>{todo.title}</label>
                    <p>{todo.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
      </main>
      <footer>
        <p></p>
      </footer>
    </>
  )
}

export default App

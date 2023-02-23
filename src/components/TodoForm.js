import React, {useState} from 'react'

function TodoForm() {
const [input, setInput] = useState('')

const handleSubmit = d => {
    d.preventDefault();

    
};


  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Add a todo" 
        value={input} 
        name="text" 
        className="todo-input"
        />
        <button className="todo-button">Add Todo</button>
    </form>
  )
}

export default TodoForm
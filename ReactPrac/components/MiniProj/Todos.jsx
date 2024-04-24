import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function Todos() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);
  
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if(inputValue !== null){
            // Editing existing todo
            if(editIndex !== null){
                const updatedTodos = [...todos];
                updatedTodos[editIndex] = {...updatedTodos[editIndex], text: inputValue};
                setTodos(updatedTodos);
                setEditIndex(null);
            } else {
                // Adding new todo
                setTodos([...todos, {id:uuidv4, text:inputValue, done:false}])
            }
            setInputValue('');
        }
    };

    const handleEditTodo = (index) => {
        setInputValue(todos[index].text)
        setEditIndex(index)
    }

    const handleDeleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    }

    const handleToggleDone = (index) => {
        const updateTodos = [...todos];
        updateTodos[index].done = !updateTodos[index].done;
        setTodos(updateTodos);
    }

    
  
    return (
      <div className='m-3 px-5' style={{background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)'}}>
        <h1 className='text-center text-decoration-underline text-light '>Todo List</h1>
        <h3 className='text-decoration-underline text-light'>Add Todo</h3>
        <input type="text" value={inputValue} onChange={handleInputChange} className='my-2'/>
        <button onClick={handleAddTodo} className='btn btn-primary mx-4'>{editIndex !== null ? 'Update' : 'Add'}</button>
        <ul className='my-5 container' style={{paddingLeft:'20%',paddingRight:'20%',paddingBottom:'5%'}}>
          {todos.map((todo, index) => (
            <li key={todo.id} className='text-light row'>
              <div className="col">
                
              <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}  className='text-light display-6 py-5'>{todo.text}</span>
              </div>
              <div className="col">
              <button onClick={() => handleToggleDone(index)} className='btn btn-success mx-2'>{todo.done ? 'Undo' : 'Done'}</button>
                
              <button onClick={() => handleEditTodo(index)} className='btn btn-primary mx-2'>Edit</button>

              <button onClick={() => handleDeleteTodo(index)} className='btn btn-danger mx-2'>Delete</button>

              </div>
            </li> 
          ))}
        </ul>
      </div>
    );
}


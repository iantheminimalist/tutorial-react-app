import React, { useState } from 'react';

function Todo({todo, index}){
    return(
        <div>
            <li key={index}>{todo.text} </li>
        </div>
    );
}

function TodoForm({addTodo}){
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!value) return;
            addTodo(value); //add Todo 
            setValue('');// resets input to blank;.
        }
    
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="enter a todo"
                value={value}
                onChange={ event => setValue(event.target.value)}
            />
        </form>
    )
}

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = text => {
        const newTodos = [ ...todos, {text}];
        setTodos(newTodos);
    };

    return (
        <div className="App-header">
            <TodoForm addTodo={addTodo}/>
           <div>
               {todos.map( (todo, index) => (
                  <Todo key={index} index={index} todo={todo} />
               ))}
           </div>
        </div>
    )
}

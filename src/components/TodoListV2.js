import React, { useState } from 'react'



export default function TodoListV2() {
    const [todos, setTodos] = useState([]);
    const [value , setValue ] = useState('');
    
    const addTodo = (text) => {
        setTodos([...todos, {id: todos.length, text} ])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <div className="App-header">
            <h3>Todolist v.2</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={e => setValue(e.target.value) } />
            </form>
            <ul>
                {todos.map( todo => (
                    <li key={todo.id}> {todo.text}</li>
                ))}
                {JSON.stringify(todos)}
            </ul>

        </div>
    )
}

import React, { useReducer, useState } from 'react';
import Todo from './Todo'

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO:'toggle-todo'
};

function reducer(todos, action ){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...todos, addTodo(action.payload.name)];
        case ACTIONS.TOGGLE_TODO:
            return todos.map( todo => {
                if(todo.id === action.payload.id){
                    return { ...todo, complete: !todo.complete};
                }
                return todo;
            })

    }
}

function addTodo(name){
    return { id: name.length, name: name, complete: false }
};

export default function InputReducer() {
    const [ todos , dispatch ] = useReducer( reducer, [] )
    const [ name , setName ] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name} });
        setName("");
    }

console.log(todos);
    return (
        <div className="App-header">
            <h3>useReducer with useState example input Form</h3> 
            <form onSubmit={handleSubmit}>
                <input
                    type="text" 
                    name="name"
                    value={name}
                    onChange={ e => setName(e.target.value) } 
                    />
            </form>
            {todos.map( todo => {
               return  <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </div>
    )
}

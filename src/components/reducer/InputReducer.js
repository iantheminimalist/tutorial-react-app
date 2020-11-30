import React, { useReducer, useState } from 'react';
import Todo from './Todo'
import { ACTIONS } from './ActionTypes';
import { addTodo } from './ActionCreators';
import CompletedTodo from './CompletedTodo';

function reducer(todos, action ){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...todos, addTodo(todos , action.payload.name)];
        case ACTIONS.TOGGLE_TODO:
            return todos.map( todo => {
                if(todo.id === action.payload.id){
                    return { ...todo, complete: !todo.complete};
                }
                return todo;
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter( todo => todo.id !== action.payload.id )
        default:
            return todos;
    }
}


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
            <div>
            <CompletedTodo todos={todos} />
            </div>
        </div>
    )
}

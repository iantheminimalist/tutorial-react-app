import React from 'react';
import { ACTIONS } from './InputReducer.js';

export default function Todo({todo, dispatch}) {
    return (
        <div>
            <span style={{ color: todo.complete ? '#fff' : '#000' }}> 
            {todo.name} 
            </span>
            <button onClick={ () => dispatch({ type: ACTIONS.TOGGLE_TODO , payload: {id: todo.id } }) } >Toggle</button>
            <button>delete</button>

        </div>

    )
}

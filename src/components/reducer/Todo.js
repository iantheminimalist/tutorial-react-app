import React from 'react';
import { ACTIONS } from './InputReducer.js';

export default function Todo({todo, dispatch}) {
    return (
        <div>
            <span style={{ color: todo.complete ? '#000' : '#fff' }}> 
            {todo.name} 
            </span>
            <button onClick={ () => dispatch({ type: ACTIONS.TOGGLE_TODO , payload: {id: todo.id } }) } >Toggle</button>
            <button onClick={ () => dispatch({ type: ACTIONS.DELETE_TODO , payload: {id: todo.id } }) } >delete</button>

        </div>

    )
}

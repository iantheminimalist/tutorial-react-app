import React from 'react'

export default function CompletedTodo({todos}) {
    const result = todos.filter( todo => (todo.complete));

    console.log(result);
    return (
            <div>
                <ul>
                {result.map( todo => (
                    <li key={todo.id} >{todo.name}</li>
                ) )}
                </ul>

            </div>
    );
}

import React from 'react'



export default function CompletedTodo({todos}) {
    const result = todos.filter( todo => (todo.complete));

    console.log(result);
    return (
            <div>
                {result.map( todo => (
                    <span> {todo.name} </span>
                ) )}
            </div>
    );
}

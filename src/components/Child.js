import React from 'react';

const Child = ({todos, handleComplete}) => {
    
  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
            return <li key={index+1}>{todo.todo}{!todo.completed && <button onClick={()=>{
                handleComplete(todo.id);
            }}>Complete</button>}</li>
        })}
      </ul>
    </div>
  );
}

export default Child;

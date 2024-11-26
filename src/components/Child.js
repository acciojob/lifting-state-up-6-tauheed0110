import React from 'react';

const Child = ({ todos, handleComplete }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.todo}
              {!todo.completed && (
                <button onClick={() => handleComplete(todo.id)}>
                  Complete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Child;

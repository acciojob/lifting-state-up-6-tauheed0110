import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const todoArr = [
  {
    id: 1,
    todo: "Learn React",
    completed: false
  },
  {
    id: 2,
    todo: "Build a React App",
    completed: false
  },
  {
    id: 3,
    todo: "Deploy the React App",
    completed: false
  }
];

const App = () => {
  const [todos, setTodos] = useState(todoArr);

  function handleComplete(id) {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        // Find the todo with the same id and update the completed field
        if (todo.id === id) {
          return { ...todo, completed: true };
        }
        return todo;
      });
      return newTodos;
    });
  }

  return (
    <div>
      <Child todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;

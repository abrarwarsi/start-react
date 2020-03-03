import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

function App() {
  const listItems = todosData.map(item => (
    <TodoItem key={item.id} item={item} />
  ));
  return (
    <div>
      <h2>To-Do List</h2>
      <div className="todo-list">{listItems}</div>
    </div>
  );
}

export default App;

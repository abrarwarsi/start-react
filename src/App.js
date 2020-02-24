import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem";

function App() {
  const styles = {
    color: "blue",
    backgroundColor: "yellow"
  };

  return (
    <div>
      <h2 style={styles}>To-Do List</h2>
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}

export default App;

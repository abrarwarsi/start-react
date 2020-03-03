import React, { Component } from "react";
import "./styles.css";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }
  render() {
    const listItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} />
    ));
    return (
      <div>
        <h2>To-Do List</h2>
        <div className="todo-list">{listItems}</div>
      </div>
    );
  }
}

export default App;

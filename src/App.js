import React from "react";
import "./App.css";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoHeader from "./components/TodoHeader";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div className="app">
        <TodoForm
          setTodos={setTodos}
          newItem={newItem}
          setNewItem={setNewItem}
        />
        <TodoHeader />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;

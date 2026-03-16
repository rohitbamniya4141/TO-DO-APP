import { useState, useEffect } from "react";
import "./App.css";
import TodoItem from "./TodoItem";

function App() {

  const [text, setText] = useState("");

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">

      <h2 className="title">Todo App</h2>

      <div className="inputRow">
        <input
          type="text"
          value={text}
          placeholder="Enter task..."
          onChange={(e) => setText(e.target.value)}
        />

        <button
          className="addBtn"
          onClick={() => {
            if (text.trim() === "") return;
            setTodos([
              ...todos,
              { id: Date.now(), text: text, completed: false }
            ]);
            setText("");
          }}
        >
          Add Task
        </button>
      </div>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}

    </div>
  );
}

export default App;
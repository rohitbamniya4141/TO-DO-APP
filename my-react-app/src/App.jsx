import { useState, useEffect} from "react";
import "./App.css";

function App() {

  const [text, setText] = useState("");
  const [todos, setTodos] = useState(() => {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
});

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos))
    },[todos])
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
            if(text.trim()==="") return;
            setTodos([
              ...todos,
              { id: Date.now(), text: text, completed: false }
            ])
            setText("")
          }}
        >
          Add Task
        </button>
      </div>
      
      {todos.map((todo) => (
        <div className="todoItem" key={todo.id}>

          <span className={todo.completed ? "completed" : ""}>
            {todo.text}
          </span>

          <div className="actions">

            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                setTodos(
                  todos.map((t) =>
                    t.id === todo.id
                      ? { ...t, completed: !t.completed }
                      : t
                  )
                )
              }
            />

            <button
              className="deleteBtn"
              onClick={() =>
                setTodos(todos.filter((t) => t.id !== todo.id))
              }
            >
              Delete
            </button>

          </div>

        </div>
      ))}

    </div>
  );
}

export default App;
function TodoItem({ todo, toggleTodo, deleteTodo }) {

  return (
    <div className="todoItem">

      <span className={todo.completed ? "completed" : ""}>
        {todo.text}
      </span>

      <div className="actions">

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        <button
          className="deleteBtn"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TodoItem;
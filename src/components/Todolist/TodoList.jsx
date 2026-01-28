import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  let [todo, setTodo] = useState("");
  let [todos, setTodos] = useState([]);
  let [isEdit, setIsEdit] = useState(false)

  let handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return; // to avoid empty todo and empty spaces
    setTodos((prev) => [...prev, todo]);
    setTodo(""); // to make input value empty after adding a todo
  };

  let handleDelete = (i) => {
    let updatedTodos = todos.filter((_, index) => index !== i);
    setTodos(updatedTodos);
  };

  let handleEdit = (i) => {
    setTodo(todos[i]);
    setIsEdit(true)
  };
  return (
    <div className="todolist">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">
            {isEdit ? "Edit Todo":"Add Todo"}
        </button>
      </form>

      <ul>
        {todos.map((item, i) => {
          return (
            <TodoItem
              key={i}
              item={item}
              onDelete={() => handleDelete(i)}
              onEdit={() => handleEdit(i)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;

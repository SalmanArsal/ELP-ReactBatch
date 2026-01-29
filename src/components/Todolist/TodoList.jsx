import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  let [todo, setTodo] = useState("");
  let [todos, setTodos] = useState([]);
  let [isEdit, setIsEdit] = useState(false);
  let [editIndex, setEditIndex] = useState(null);

  let handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return; // to avoid empty todo and empty spaces
    if (isEdit) {
      setTodos((prev) => {
        prev[editIndex] = todo;
        return [...prev];
      });

      setIsEdit(false);
      setEditIndex(null);
    } else {
      setTodos((prev) => [...prev, todo]);
    }
    setTodo(""); // to make input value empty after adding a todo
  };

  let handleDelete = (i) => {
    let updatedTodos = todos.filter((_, index) => index !== i);
    setTodos(updatedTodos);
  };

  let handleEdit = (i) => {
    setTodo(todos[i]);
    setIsEdit(true);
    setEditIndex(i);
  };
  return (
    <div className="todolist">
      <h1 className="text-6xl font-bold tracking-wider">TODOLIST APP</h1>
      <form onSubmit={handleSubmit} className="pt-10">
        <input
          type="text"
          placeholder="Enter a Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="bg-[#ffff] p-3 outline-none"
        />
        <button
          type="submit"
          className="bg-green-200 p-3 rounded-md hover:bg-green-700 hover:duration-100"
        >
          {isEdit ? "Edit Todo" : "Add Todo"}
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

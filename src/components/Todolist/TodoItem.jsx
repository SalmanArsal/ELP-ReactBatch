import React from "react";

const TodoItem = ({ item, onDelete, onEdit }) => {
  return (
    <>
      <li className="flex capitalize bg-blue-300 justify-center items-center mt-5 p-3 gap-5 min-w-50">
        {item}
        <button
          className="bg-red-500 text-white p-3 rounded-md"
          onClick={onDelete}
        >
          Delete
        </button>

        <button 
        className="bg-orange-600 text-white p-3 rounded-md"
        onClick={onEdit}>Edit</button>
      </li>
    </>
  );
};

export default TodoItem;

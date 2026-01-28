import React from 'react'

const TodoItem = ({item, onDelete, onEdit}) => {
    
  return (
   <>
    <li>
        {item} 
        <button onClick={onDelete}>Delete</button>
        <button onClick={onEdit}>Edit</button>
    </li>
   </>
  )
}

export default TodoItem
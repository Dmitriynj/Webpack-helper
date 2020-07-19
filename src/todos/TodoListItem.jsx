import React from "react";
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed, onTodoCompleted }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>  
      <div className="buttons-container">
        {!todo.isCompleted && <button className="complete-btn" onClick={e => onTodoCompleted(todo.text)}>Mark as Completed</button>}
        <button className="remove-btn" onClick={(e) => onRemovePressed(todo.text)}>Remove</button>
      </div>
    </div>
  );
};


export default TodoListItem;
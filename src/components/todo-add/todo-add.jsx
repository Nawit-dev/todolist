import React from "react";
import "./todo-add.css";
const TodoAdd = (props) => {
  return (
    <div className="todoadd_wrapper">
      <input className="todo-add" placeholder="What needs to be done?" />
      <button type="button" className="btn mybtn btn-outline-secondary "
      onClick = {() => props.onItemAdd('hello world')}>
        Add
      </button>
    </div>
  );
};
export default TodoAdd;

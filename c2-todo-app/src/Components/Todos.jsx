import React from "react";
import "./Todos.css"

const Todos = ({ data, onCheckboxChange }) => {
  const { todo, checked, id } = data;

  return (
    <div className="todos">
      <input
        className="check"
        type="checkbox"
        checked={checked}
        onChange={() => onCheckboxChange(id)}
      />
      <p>{todo}</p>
    </div>
  );
};

export default Todos;

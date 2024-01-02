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
      <h3>{todo}</h3>
    </div>
  );
};

export default Todos;

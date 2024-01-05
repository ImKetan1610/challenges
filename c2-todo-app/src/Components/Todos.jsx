import React from "react";
import "./Todos.css";

const Todos = ({ data, onCheckboxChange }) => {
  const { todo, checked, id, complete } = data;

  return (
    <div className="todos">
      <div>
        <input
          className="check"
          type="checkbox"
          checked={checked}
          onChange={() => onCheckboxChange(id)}
        />
        <p style={{ marginRight: "25%" }}>{todo}</p>
      </div>
      <p>{complete ? "Completed" : "Pending"}</p>
    </div>
  );
};

export default Todos;

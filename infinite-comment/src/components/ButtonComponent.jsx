import React from "react";

const ButtonComponent = ({ handleClick, type, className }) => {
  return (
    <div
      style={{ margin: "0 10px" }}
      className={className}
      onClick={handleClick}
    >
      {type}
    </div>
  );
};

export default ButtonComponent;

import React from "react";

const Todo = ({ text, complete, onClick }) => {
  return (
    <li onClick={onClick} style={{ color: complete ? "green" : "black" }}>
      {text}
    </li>
  );
};

export default Todo;

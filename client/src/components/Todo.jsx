import React, { useState } from "react";
// import { edit } from "../functions/edit";
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({ item, deleteItem, setError }) {
  const [isChecked, setIsChecked] = useState(item.completed);
  const [title, setTitle] = useState(item.title);
  const [isEdited, setIsEdited] = useState(false);

  return (
    <div className="todo-div" key={item.id}>
      {/* <span>{item.id}</span> */}
      {/* <br /> */}
      {/* <span>{item.todo}</span> */}
      <input
        type="checkbox"
        // onChange={() => handleCheck(item.id)}
        // checked={item.checked}
      />
      <label
      // style={item.checked ? { textDecoration: "line-through" } : null}
      >
        {item.todo}
      </label>
      <span onClick={() => deleteItem(item.id)}>
        <FaTrashAlt />
      </span>
    </div>
  );
}

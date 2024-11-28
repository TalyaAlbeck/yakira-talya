import React, { useState } from "react";
// import { edit } from "../functions/edit";
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({
  item,
  index,
  deleteItem,
  setError,
  handleCheck,
}) {
  // const [title, setTitle] = useState(item.title);
  // const [isEdited, setIsEdited] = useState(false);

  return (
    <div className="todo-div" key={item.id}>
      {/* <span>{item.id}</span> */}
      {/* <br /> */}
      {/* <span>{item.todo}</span> */}
      <input
        type="checkbox"
        onChange={() => handleCheck(item, index)}
        checked={item.checked === 0 ? false : true}
      />
      <label
        style={item.checked === 1 ? { textDecoration: "line-through" } : null}
      >
        {item.todo}
      </label>
      <span onClick={() => deleteItem(item.id)}>
        <FaTrashAlt />
      </span>
    </div>
  );
}

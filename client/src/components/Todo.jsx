import React, { useState } from "react";
// import { edit } from "../functions/edit";

export default function Todo({ item, deleteItem, setError }) {
  const [isChecked, setIsChecked] = useState(item.completed);
  const [title, setTitle] = useState(item.title);
  const [isEdited, setIsEdited] = useState(false);

  //   async function handleChecked(e) {
  //     setIsChecked(e.target.checked);
  //     const url = `${API_URL}/todos/${item.id}`;
  //     const updateOption = {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         completed: !isChecked,
  //       }),
  //     };
  //     const result = await apiRequest(url, updateOption);
  //   }

  //   function handleSaveChanges() {
  //     edit("todos", item, title, setError, setIsEdited);
  //   }

  return (
    <div className="todo-div" key={item.id}>
      <span>{item.id}</span>
      <br />
      <span>{item.todo}</span>
      {/* {isEdited ? (
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      ) : (
        <label>{title}</label>
      )}
      <input type="checkbox" checked={isChecked} onChange={handleChecked} />
      <br />
      <div>
        {!isEdited ? (
          <button onClick={() => setIsEdited(true)}>edit</button>
        ) : (
          <button onClick={handleSaveChanges}>save</button>
        )} */}
      <button onClick={() => deleteItem(item.id)}>delete</button>
      {/* </div> */}
    </div>
  );
}

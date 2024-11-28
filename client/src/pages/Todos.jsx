import React, { useEffect, useState } from "react";
import Todo from "../components/Todo";
// import { searchItem } from "../functions/search";
import { getRequest } from "../functions/getRequest";
import { postRequest } from "../functions/postRequest";
import { deleteRequest } from "../functions/deleteRequest";
import { patchRequest } from "../functions/fatchRequest";

export default function Todos() {
  const [error, setError] = useState(null);
  const [todosList, setTodosList] = useState([]);
  const [isChecked, setIsChecked] = useState(0);
  const [add, setAdd] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState({
    isSearched: false,
    searchedItems: [],
  });
  const username = localStorage.getItem("currentUser");

  useEffect(() => {
    (async () => {
      const todosArr = await getRequest(`todos/${username}`);
      setTodosList(todosArr.text);
    })();
  }, []);

  async function handleCheck(item, index) {
    console.log(item.id);
    console.log(item.checked);

    const updatedList = todosList.map((item2) =>
      item2.id === item.id
        ? { ...item, checked: item2.checked === 0 ? 1 : 0 }
        : item2
    );

    setTodosList(updatedList);
    const updateChande = await patchRequest(updatedList[index], "todos");
  }

  async function addTodo(e) {
    e.preventDefault();
    const newTodoObj = {
      username: username,
      todo: newTodo,
    };
    const addedTodo = await postRequest(newTodoObj, "todos");
    const todosArr = await getRequest(`todos/${username}`);
    console.log("todosArr.text: ", todosArr.text);
    setTodosList(todosArr.text);
    setAdd((prev) => !prev);
  }

  async function deleteItem(itemId) {
    const deletedItem = await deleteRequest({ itemId }, "todos");
    const todosArr = await getRequest(`todos/${username}`);
    setTodosList(todosArr.text);
  }

  return (
    <div className="todos-container">
      <h3>Todos</h3>
      {error !== null && <p>{error}</p>}
      <button onClick={() => setAdd((prev) => !prev)}>add</button>
      {add && (
        <form>
          <label>new todo:</label>
          <br />
          <input
            className="addToDo-input"
            autoFocus
            onChange={(e) => setNewTodo(e.target.value)}
          ></input>
          <br />
          <button onClick={addTodo}>save</button>
        </form>
      )}
      {todosList.map((item, index) => {
        return (
          <Todo
            key={item.id}
            item={item}
            index={index}
            deleteItem={deleteItem}
            setError={setError}
            handleCheck={handleCheck}
            isChecked={isChecked}
          />
        );
      })}
    </div>
  );
}

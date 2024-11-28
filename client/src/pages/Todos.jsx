import React, { useEffect, useState } from "react";
import Todo from "../components/Todo";
// import { searchItem } from "../functions/search";
import { getRequest } from "../functions/getRequest";
import { postRequest } from "../functions/postRequest";
import { deleteRequest } from "../functions/deleteRequest";

export default function Todos() {
  const [error, setError] = useState(null);
  const [todosList, setTodosList] = useState([]);
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

  async function addTodo(e) {
    e.preventDefault();
    const newTodoObj = {
      username: username,
      todo: newTodo,
    };
    const addedUser = await postRequest(newTodoObj, "todos");
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
          <input onChange={(e) => setNewTodo(e.target.value)}></input>
          <br />
          <button onClick={addTodo}>save</button>
        </form>
      )}
      {todosList.map((item) => {
        return (
          <Todo
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            setError={setError}
          />
        );
      })}
    </div>
  );
}

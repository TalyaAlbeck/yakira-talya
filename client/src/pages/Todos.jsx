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

  async function addTodo(e) {
    e.preventDefault();
    const newTodoObj = {
      username: username,
      todo: newTodo,
    };
    const addedUser = await postRequest(newTodoObj, "todos");
    const todosArr = await getRequest(`todos/${username}`);
    setTodosList(todosArr.text);
    setAdd((prev) => !prev);
  }

  async function deleteItem(itemId) {
    const deletedItem = await deleteRequest({ itemId }, "todos");
    const todosArr = await getRequest(`todos/${username}`);
    setTodosList(todosArr.text);
  }

  //   function handleSearch(e) {
  //     searchItem(e, searchInput, todosList, setSearch);
  //   }

  //   function sortTodos() {
  //     const sortedTodos = todosList.sort((a, b) =>
  //       a.completed === b.completed ? 0 : a.completed ? 1 : -1
  //     );
  //     const sortedSearchedTodos = search?.searchedItems?.sort((a, b) =>
  //       a.completed === b.completed ? 0 : a.completed ? 1 : -1
  //     );
  //     setSearch((prev) => ({ ...prev, searchedTodos: sortedSearchedTodos }));
  //     setTodosList(sortedTodos);
  //   }

  return (
    <>
      <h1>Todos</h1>
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
    </>
  );

  //       <input
  //         value={searchInput}
  //         onChange={(e) => setSearchInput(e.target.value)}
  //       />
  //       <button onClick={handleSearch}>search</button>
  //       <button onClick={sortTodos}>sort</button>
  //       <main className="todos-container">
  //         {!search.isSearched
  //           ? todosList.map((item) => {
  //               return (
  //                 <Todo
  //                   key={item.id}
  //                   item={item}
  //                   deleteItem={deleteItem}
  //                   setError={setError}
  //                 />
  //               );
  //             })
  //           : search.searchedItems.map((item) => {
  //               return (
  //                 <Todo
  //                   key={item.id + "b"}
  //                   item={item}
  //                   deleteItem={deleteItem}
  //                   setError={setError}
  //                 />
  //               );
  //             })}
  //       </main>
  //     </>
  //   );
}

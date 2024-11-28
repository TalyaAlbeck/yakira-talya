import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { getRequest } from "../functions/getRequest";
import { deleteRequest } from "../functions/deleteRequest";
import { postRequest } from "../functions/postRequest";
// import { searchItem } from "../functions/search";

export default function Posts() {
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [disable, setDisable] = useState(false);
  const [add, setAdd] = useState(false);
  const [page, setPage] = useState(0);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState({
    isSearched: false,
    searchedItems: [],
  });
  const username = localStorage.getItem("currentUserId");

  useEffect(() => {
    (async () => {
      const postsArr = await getRequest(`posts/${page}`);
      setPosts(postsArr.text);
    })();
  }, []);

  async function showMore() {
    setPage((prev) => prev + 3);
    const postsArr = await getRequest(`posts/${page + 3}`);
    setPosts(postsArr.text);
    if (postsArr.amount) {
      setDisable(true);
      setError(postsArr.amount);
    }
  }

  async function handelDelete(item) {
    console.log("deleted");
    console.log(item);

    const deletePost = await deleteRequest(item, "posts");
    const getTheNewPosts = await getRequest(`posts/${page}`);
    setPosts(getTheNewPosts.text);
  }

  async function addPost(e) {
    e.preventDefault();
    const newPost = {
      username: localStorage.getItem("currentUser"),
      title: newTitle,
      body: newBody,
    };
    const addedPost = await postRequest(newPost, "posts");
    const postsArr = await getRequest(`posts/${page + 3}`);
    setPosts(postsArr.text);
    if (postsArr.amount) {
      setDisable(true);
      setError(postsArr.amount);
    }
    setAdd((prev) => !prev);
  }

  return (
    <>
      <h1>Posts</h1>
      {error && <p>{error}</p>}
      <button onClick={() => setAdd((prev) => !prev)}>add post</button>
      {add && (
        <form>
          <br />
          <input
            autoFocus
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="title"
          ></input>
          <br />
          <input
            onChange={(e) => setNewBody(e.target.value)}
            placeholder="body"
          ></input>
          <br />
          <button onClick={addPost}>save</button>
        </form>
      )}
      <button disabled={disable} onClick={showMore}>
        show next
      </button>
      {posts.map((item) => {
        return (
          <Post
            key={item.id}
            item={item}
            // handledeleteItem={handledeleteItem}
            setError={setError}
            handelDelete={handelDelete}
          />
        );
      })}
    </>
  );
}

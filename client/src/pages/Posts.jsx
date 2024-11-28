import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { getRequest } from "../functions/getRequest";
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

  //   function handledeleteItem(item) {
  //     handleDelete(posts, item, setPosts, "posts", setError);
  //   }

  //   function addPost(e) {
  //     const newPost = {
  //       userId: parseInt(userId),
  //       title: newTitle,
  //       body: newBody,
  //     };
  //     addItem(e, newPost, "posts", setError, setPosts, setAdd);
  //   }

  //   function handleSearch(e) {
  //     searchItem(e, searchInput, posts, setSearch);
  //   }

  //   return (
  //     <>
  //       <h1>Posts</h1>
  //       {error !== null && <p>{error}</p>}
  //       <button onClick={() => setAdd((prev) => !prev)}>add</button>
  //       {add && (
  //         <form>
  //           <label>Title:</label><br/>
  //           <input onChange={(e) => setNewTitle(e.target.value)}></input><br/>
  //           <label>Body:</label><br/>
  //           <input onChange={(e) => setNewBody(e.target.value)}></input><br/>
  //           <button onClick={addPost}>save</button>
  //         </form>
  //       )}
  //       <input
  //         value={searchInput}
  //         onChange={(e) => setSearchInput(e.target.value)}
  //       />
  //       <button onClick={handleSearch}>search</button>
  //       <main className="posts-container">
  //         {!search.isSearched
  //           ? posts.map((item) => {
  //               return (
  //                 <Post
  //                   key={item.id}
  //                   item={item}
  //                   handledeleteItem={handledeleteItem}
  //                   setError={setError}
  //                 />
  //               );
  //             })
  //           : search.searchedItems.map((item) => {
  //               return (
  //                 <Post
  //                   key={item.id + "b"}
  //                   item={item}
  //                   handledeleteItem={handledeleteItem}
  //                   setError={setError}
  //                 />
  //               );
  //             })}
  //       </main>
  //     </>
  //   );

  return (
    <>
      <h1>Posts</h1>
      {error && <p>{error}</p>}
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
          />
        );
      })}
    </>
  );
}

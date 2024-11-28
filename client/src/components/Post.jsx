import React, { useState } from "react";
// import Comments from "./Comments";
// import { edit } from "../functions/edit";
import { deleteRequest } from "../functions/deleteRequest";

export default function Post({ item, handledeleteItem, setError }) {
  const [title, setTitle] = useState(item.title);
  const [isEdited, setIsEdited] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [showComments, setShowComments] = useState(false);

  //   function handleSaveChanges() {
  //     edit("posts", item, title, setError, setIsEdited);
  //   }

  function deletePost() {
    console.log("deleted");
  }

  return (
    <div className="post-div" key={item.id}>
      <span>post id: {item.id}</span>
      <span>user_id: {item.user_id}</span>
      <br />
      {/* {isEdited ? (
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      ) : ( */}
      <label>{title}</label>
      {/* )} */}
      <br />
      <span>{showBody ? item.body : null}</span>

      {/* {showComments ? (
        <div className="post-comments">
          <Comments postId={item.id} />
        </div>
      ) : null} */}

      <div className="post-buttons">
        {/* {!isEdited ? (
          <button onClick={() => setIsEdited(true)}>edit</button>
        ) : (
          <button onClick={handleSaveChanges}>save</button>
        )}
        <button onClick={() => setShowComments((prev) => !prev)}>
          Comments
        </button> */}
        <button onClick={() => setShowBody((prev) => !prev)}>Body</button>
        {item.user_id === JSON.parse(localStorage.getItem("userId")) && (
          <button onClick={deletePost}>delete</button>
        )}
      </div>
    </div>
  );
}

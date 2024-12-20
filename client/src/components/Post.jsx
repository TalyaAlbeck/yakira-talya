import React, { useState } from "react";
import Comments from "./Comments";

export default function Post({ item, handelDelete, setError }) {
  const [title, setTitle] = useState(item.title);
  const [isEdited, setIsEdited] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="post-div" key={item.id}>
      <span>post id: {item.id}</span>
      <span>user_id: {item.user_id}</span>
      <br />
      <label>{title}</label>
      <br />
      <span>{showBody ? item.body : null}</span>

      <div className="post-buttons">
        <button onClick={() => setShowComments((prev) => !prev)}>
          Comments
        </button>
        <button onClick={() => setShowBody((prev) => !prev)}>Body</button>
        {item.user_id === JSON.parse(localStorage.getItem("userId")) && (
          <button onClick={() => handelDelete(item)}>delete</button>
        )}
        {showComments ? (
          <div className="post-comments">
            <Comments postId={item.id} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { getRequest } from "../functions/getRequest";
// import { handleDelete } from "../functions/delete";
// import { addItem } from "../functions/add";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [add, setAdd] = useState(false);
  const [newBody, setNewBody] = useState("");
  const [commentingUsername, setCommentingUsername] = useState();

  useEffect(() => {
    (async () => {
      const commentsArr = await getRequest(`comments/${postId}`);
      if (commentsArr.status === 200) {
        setComments(commentsArr.text);
      } else if (commentsArr.status === 404) {
        setError(commentsArr.text);
      }
    })();
  }, []);

  //   function handledeleteItem(item) {
  //     handleDelete(comments, item, setComments, "comments", setError);
  //   }

  //   function addComment(e) {
  //     const newComment = {
  //       postId: parseInt(postId),
  //       name: commentingUsername,
  //       body: newBody,
  //     };
  //     addItem(e, newComment, "comments", setError, setComments, setAdd);
  //   }

  return (
    <>
      {error && <p>{error}</p>}
      <main className="comments-container">
        {comments.map((com) => {
          return (
            <Comment
              key={com.id}
              id={com.id}
              user_id={com.user_id}
              comment={com.comment}
              //   handledeleteItem={handledeleteItem}
            />
          );
        })}
      </main>
      {/* <button onClick={() => setAdd((prev) => !prev)}>add</button>
      {add && (
        <form>
          <label>Commenting user name:</label>
          <br />
          <input
            onChange={(e) => setCommentingUsername(e.target.value)}
          ></input>
          <br />
          <label>Body:</label>
          <br />
          <input onChange={(e) => setNewBody(e.target.value)}></input>
          <br />
          <button onClick={addComment}>save</button>
        </form>
      )} */}
    </>
  );
}

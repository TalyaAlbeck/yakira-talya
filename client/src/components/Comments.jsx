import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { getRequest } from "../functions/getRequest";
import { deleteRequest } from "../functions/deleteRequest";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

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

  async function handelDelete(item) {
    const deleteComment = await deleteRequest(item, "comments");
    const getTheNewComments = await getRequest(`comments/${postId}`);
  }

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
              handelDelete={handelDelete}
            />
          );
        })}
      </main>
    </>
  );
}

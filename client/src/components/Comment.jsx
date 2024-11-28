import React from "react";

export default function Comment({ id, user_id, comment, handledeleteItem }) {
  return (
    <div className="comment-div" key={id}>
      <div className="comment-data">
        <span>comment id: {id}</span>
        <br />
        <span>
          <strong>commenter's id: </strong>
          {user_id}
        </span>
        <br />
        <span>
          <strong>comment: </strong>
          {comment}
        </span>
      </div>
    </div>
  );
}

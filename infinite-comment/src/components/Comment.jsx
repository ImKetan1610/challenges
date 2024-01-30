import React from "react";
import { useState, useRef, useEffect } from "react";

const Comment = ({ comment }) => {
  const [input, setInput] = useState("");
  const onAddComment = () => {};
  return (
    <div className="comment-container">
      {comment.id === 1 ? (
        <div className="comment-input-container">
          <input
            type="text"
            className="comment-input"
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type a comment here"
          />
          <div className="reply-btn" onClick={onAddComment}>
            Add Comment
          </div>
        </div>
      ) : (
        <div className="child-comment-container">
          <span>{comment.count}</span>
          <br />
          <span>{comment.name}</span>
        </div>
      )}

      {comment?.items?.map((ele) => {
        return <Comment key={ele.id} comment={ele} />;
      })}
    </div>
  );
};

export default Comment;

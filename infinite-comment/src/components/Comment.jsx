import React from "react";
import { useState, useRef, useEffect } from "react";

const Comment = ({ comment }) => {
  const [input, setInput] = useState("");
  const onAddComment = () => {};
  return (
    <div>
      {comment.id === 1 ? (
        <div>
          <input
            type="text"
            className="commentInput"
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type a comment here"
          />
          <div className="replyBtn" onClick={onAddComment}>
            Add Comment
          </div>
        </div>
      ) : (
        <span>{comment.name}</span>
      )}
      
      {comment?.items?.map((ele) => {
        return <Comment key={ele.id} comment={ele} />;
      })}
    </div>
  );
};

export default Comment;

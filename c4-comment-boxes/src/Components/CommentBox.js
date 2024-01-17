import React, { useState } from "react";
import "./CommentBox.css";

const CommentBox = () => {
  const [count, setCount] = useState(0);
  const [reply, setReply] = useState(true);

  const handleCount = (value) => {
    if (count === 0 && value === -1) {
      return;
    } else {
      setCount(count + value);
    }
  };
  return (
    <div id="comment-box">
      <div className="btn-box">
        <button onClick={() => handleCount(1)}>+</button>
        <p>{count}</p>
        <button onClick={() => handleCount(-1)}>-</button>
      </div>

      <div className="inputBox">
        <textarea
          minLength="200px"
          type="text"
          placeholder="Reply input field goes here"
        />
        <button>Reply</button>
      </div>
    </div>
  );
};

export default CommentBox;

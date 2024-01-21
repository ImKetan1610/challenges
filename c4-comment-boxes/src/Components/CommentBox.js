// import React, { useState } from "react";
// import "./CommentBox.css";

// const CommentBox = () => {
//   const [count, setCount] = useState(0);
//   const [comments, setComments] = useState([]);
//   const [commentText, setCommentText] = useState("");

//   const handleCount = (value) => {
//     if (count === 0 && value === -1) {
//       return;
//     } else {
//       setCount(count + value);
//     }
//   };

//   const handleAddComment = () => {
//     if (commentText.trim() !== "") {
//       setComments([
//         ...comments,
//         { sortValue: 0, text: commentText, replies: [] },
//       ]);
//       console.log("commentText=>", commentText);
//       setCommentText("");
//     }
//   };

//   const handleReply = (commentIndex) => {
//     const replyText = prompt("Enter your reply:");
//     if (replyText !== null) {
//       const updatedComments = [...comments];
//       updatedComments[commentIndex].replies.push(replyText);
//       setComments(updatedComments);
//     }
//   };

//   return (
//     <div id="comment-box">
//       <div className="btn-box">
//         <button onClick={() => handleCount(1)}>+</button>
//         <p>{count}</p>
//         <button onClick={() => handleCount(-1)}>-</button>
//       </div>

//       <div className="inputBox">
//         <textarea
//           minLength="200px"
//           type="text"
//           placeholder="Reply input field goes here"
//           value={commentText}
//           onChange={(e) => setCommentText(e.target.value)}
//         />
//         <div className="btn-div">
//           <button onClick={handleAddComment}>Add Comment</button>
//           <button>Reply</button>
//           {/* <div className="comments-section">
//             {comments.map((comment, index) => (
//               <div key={index} className="comment">
//                 <p>{comment.text}</p>
//                 <button onClick={() => handleReply(index)}>Reply</button>
//                 {comment.replies.length > 0 && (
//                   <div className="replies">
//                     {comment.replies.map((reply, replyIndex) => (
//                       <p key={replyIndex}>{reply}</p>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommentBox;
import React, { useState } from "react";
import "./CommentBox.css";

const CommentBox = ({text}) => {
  const [count, setCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleCount = (value) => {
    if (count === 0 && value === -1) {
      return;
    } else {
      setCount(count + value);
    }
  };

  const handleAddComment = () => {
    if (commentText.trim() !== "") {
      setComments([
        ...comments,
        { sortValue: 0, text: commentText, replies: [] },
      ]);
      setCommentText("");
    }
  };

  const handleReply = (commentIndex) => {
    const replyText = prompt("Enter your reply:");
    if (replyText !== null) {
      const updatedComments = [...comments];
      updatedComments[commentIndex].replies.push(replyText);
      setComments(updatedComments);
    }
  };

  return (
    <div id="comment-box">
      {text &&
      <CommentBox/>
      }
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
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <div className="btn-div">
          <button onClick={handleAddComment}>Add Comment</button>
        </div>
      </div>

      <div className="comments-section">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>{comment.text}</p>
            <button onClick={() => handleReply(index)}>Reply</button>
            {comment.replies.length > 0 && (
              <div className="replies">
                {comment.replies.map((reply, replyIndex) => (
                  <>
                  <p key={replyIndex}>{reply}</p>
                  <button onClick={() => handleReply(index)}>Reply</button>
                  </>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentBox;

import React from "react";
import { useState, useRef, useEffect } from "react";
import ButtonComponent from "./ButtonComponent";

const Comment = ({
  comment,
  handleInsertNode,
  handleUpdateNode,
  handleDeleteNode,
}) => {
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [isEdit]);

  const handleNewComment = () => {
    setShowInput(true);
  };

  const onAddComment = () => {
    if (isEdit) {
      handleUpdateNode(comment.id, inputRef?.current?.innerText);
    } else {
      handleInsertNode(comment.id, input);
      setShowInput(false);
      setInput("");
    }
    if (isEdit) setIsEdit(false);
  };

  const handleDelete = () => {
    handleDeleteNode(comment.id);
  };

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
          <ButtonComponent
            className="reply-btn"
            type={"Add Comment"}
            handleClick={onAddComment}
          />
        </div>
      ) : (
        <div className="child-comment-container">
          <span>{comment.count}</span>
          <br />
          <span
            contentEditable={isEdit}
            suppressContentEditableWarning={isEdit}
            ref={inputRef}
          >
            {comment.name}
          </span>
          <div style={{ display: "flex", marginTop: "5px" }}>
            {isEdit ? (
              <>
                <ButtonComponent
                  className={"save"}
                  type={"Save"}
                  handleClick={onAddComment}
                />
                <ButtonComponent
                  className={"cancel"}
                  type={"Cancel"}
                  handleClick={() => {
                    if (inputRef.current)
                      inputRef.current.innerText = comment.name;
                    setIsEdit(!isEdit);
                  }}
                />
              </>
            ) : (
              <>
                <ButtonComponent
                  className={"reply"}
                  type={"Reply"}
                  handleClick={handleNewComment}
                />
                <ButtonComponent
                  className={"edit"}
                  type={"Edit"}
                  handleClick={() => {
                    setIsEdit(!isEdit);
                  }}
                />
                <ButtonComponent
                  className={"delete"}
                  type={"Delete"}
                  handleClick={handleDelete}
                />
              </>
            )}
          </div>
        </div>
      )}

      <div>
        {showInput && (
          <div>
            <input
              type="text"
              className="comment-input"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type a comment here"
            />
            <ButtonComponent
              className="reply-btn"
              type={"Add Comment"}
              handleClick={onAddComment}
            />
            <ButtonComponent
              className="reply-btn"
              type={"Cancel"}
              handleClick={() => {
                setShowInput(!showInput);
              }}
            />
          </div>
        )}
        {comment?.items?.map((ele) => {
          return (
            <Comment
              key={ele.id}
              comment={ele}
              handleInsertNode={handleInsertNode}
              handleUpdateNode={handleUpdateNode}
              handleDeleteNode={handleDeleteNode}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comment;

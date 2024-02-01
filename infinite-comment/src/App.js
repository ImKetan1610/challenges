import Comment from "./components/Comment";
import { useState } from "react";
import useNode from "./hooks/useNode";
const comments = {
  id: 1,
  count: 2,
  items: [],
};

function App() {
  const [commentsData, setCommentsData] = useState(comments);
  const { insertNode, updateNode, deleteNode } = useNode();

  const handleInsertNode = function (folderId, item) {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  const handleUpdateNode = function (folderId, value) {
    const finalStructure = updateNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };

  const handleDeleteNode = function (folderId) {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };

  return (
    <div className="App">
      <Comment
        handleInsertNode={handleInsertNode}
        handleUpdateNode={handleUpdateNode}
        handleDeleteNode={handleDeleteNode}
        comment={commentsData}
      />
    </div>
  );
}

export default App;

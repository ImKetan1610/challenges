import Comment from "./components/Comment";
import { useState } from "react";

const comments = {
  id: 1,
  items: [
    {
      id: 123456789,
      name: "Hello 1",
      items: [
        {
          id: 123456790,
          name: "hello 1.1",
          items: [{ id: 123456791, name: "Hello 1.2", items: [] }],
        },
      ],
    },
    {
      id: 987654321,
      name: "Hi 1",
      items: [
        {
          id: 987654322,
          name: "hi 1.1",
          items: [{ id: 987654323, name: "Hi 1.2", items: [] }],
        },
      ],
    },
  ],
};

function App() {
  const [commentsData, setCommentsData] = useState(comments);
  return (
    <div className="App">
      <Comment comment={commentsData} />
    </div>
  );
}

export default App;

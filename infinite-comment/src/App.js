import Comment from "./components/Comment";
import { useState } from "react";

const comments = {
  id: 1,
  count: 2,
  items: [
    {
      id: 123456789,
      name: "Hello 1",
      count: 2,
      items: [
        {
          id: 123456790,
          count: 2,
          name: "hello 1.1",
          items: [{ id: 123456791,count: 2, name: "Hello 1.2", items: [] }],
        },
      ],
    },
    {
      id: 987654321,
      name: "Hi 1",count: 2,
      items: [
        {
          id: 987654322,
          name: "hi 1.1",count: 2,
          items: [{ id: 987654323, count: 2,name: "Hi 1.2", items: [] }],
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

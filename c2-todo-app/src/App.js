import { useEffect, useState } from "react";
import "./App.css";
import Todos from "./Components/Todos";
import axios from "axios";

function App() {
  const [todoArray, setTodoArray] = useState([]);
  const [todoData, setTodoData] = useState({ todo: "", checked: false });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckbox = (id) => {
    setTodoArray((prevArray) =>
      prevArray.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const getTodoArray = async () => {
    try {
      let data = await axios.get(`http://localhost:3001/data`);
      setTodoArray(data.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    getTodoArray();
  }, []);

  const postTodos = async () => {
    try {
      let res = await axios.post("http://localhost:3001/data", todoData);
      // clear the input field
      setTodoData({ todo: "", checked: false });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  console.log(todoArray);

  return (
    <div className="App">
      <div>
        <input onChange={handleChange} name="todo" value={todoData.todo} />
        <button onClick={postTodos} value="Add Todo">
          Add Todo{" "}
        </button>
      </div>
      {todoArray &&
        todoArray.map((todo) => (
          <Todos key={todo.id} data={todo} onCheckboxChange={handleCheckbox} />
        ))}
    </div>
  );
}

export default App;

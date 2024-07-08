import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [stack, setStack] = useState([]);

  const handleClick = (e) => {
    document.getElementById(e.target.id).style.backgroundColor = "green";
    setStack((prevStack) => [...prevStack, e.target.id]);
  };

  function changeBackgroundColor(color) {
    setStack((prevStack) => {
      if (prevStack.length === 0) return prevStack;
      const newStack = [...prevStack];
      // const s2 = newStack.pop();
      const s2 = newStack.shift();
      console.log(s2);
      document.getElementById(s2).style.backgroundColor = color;
      return newStack;
    });
  }

  useEffect(() => {
    if (stack.length > 0) {
      const timeout = setTimeout(() => {
        changeBackgroundColor("white");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [stack]);
  console.log(stack);

  return (
    <div className="App">
      {arr.map((el) => (
        <div
          key={el}
          id={el}
          style={{ border: "1px solid", width: "100px", height: "100px" }}
          onClick={handleClick}
        ></div>
      ))}
    </div>
  );
}

import "./App.css";
import Accordion from "./Components/Accordion";

function App() {
  return (
    <div className="App">
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        <i>Some Important Question of React</i>
      </h1>
      <Accordion />
    </div>
  );
}

export default App;

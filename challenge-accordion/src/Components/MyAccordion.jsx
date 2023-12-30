import React, { useState } from "react";
import "./MyAccordion.css";

const MyAccordion = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <section className="main-section">
      <div className="main-question">
        <h1 onClick={handleToggle}>
          {toggle ? (
            <button className="toggle-btn">-</button>
          ) : (
            <button className="toggle-btn">+</button>
          )}
        </h1>
        <h1>{question}</h1>
      </div>
      <div>{toggle && <p className="main-answer">{answer}</p>}</div>
    </section>
  );
};

export default MyAccordion;

import React, { useState } from "react";
import { data } from "../Data/data.js";
import MyAccordion from "./MyAccordion";

const Accordion = () => {
  const [queData, setQueData] = useState(data);
  return (
    <section className="accordion">
      {queData.map(({id,...data}) => (
        <MyAccordion key={id} {...data} />
      ))}
    </section>
  );
};

export default Accordion;

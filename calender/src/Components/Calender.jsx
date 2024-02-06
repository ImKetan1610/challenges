import React, { useState } from "react";
import CalenderBody from "./CalenderBody";
import CalenderHeader from "./CalenderHeader";

const Calender = () => {
  const [currDate, setCurrDate] = useState(new Date());

  const handleMonthChange = (newDate) => {
    setCurrDate(newDate);
  };

  return (
    <div className="calender">
      <CalenderHeader
        currentDate={currDate}
        onMonthChange={handleMonthChange}
      />
      <CalenderBody currentDate={currDate} />
    </div>
  );
};

export default Calender;

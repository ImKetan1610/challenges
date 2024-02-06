import React from "react";

const CalenderHeader = ({ currentDate, onMonthChange }) => {
  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(newDate);
  };
  return (
    <div className="calendar-header">
      <button onClick={handlePrevMonth}>&lt;</button>
      <h2>
        {currentDate.toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}
      </h2>
      <button onClick={handleNextMonth}>&gt;</button>
    </div>
  );
};

export default CalenderHeader;

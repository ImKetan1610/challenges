// src/components/CalendarBody.js

const CalendarBody = ({ currentDate }) => {
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const totalDaysInMonth = lastDayOfMonth.getDate();
  const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 (Sunday) to 6 (Saturday)

  const daysInMonth = Array.from({ length: totalDaysInMonth }, (_, index) => index + 1);
  const blanksBeforeFirstDay = Array.from({ length: firstDayOfWeek }, (_, index) => index);

  const daysGrid = [...blanksBeforeFirstDay, ...daysInMonth];

  return (
    <div>
      <div className="calendar-grid">
        <div className="day-name">Sun</div>
        <div className="day-name">Mon</div>
        <div className="day-name">Tue</div>
        <div className="day-name">Wed</div>
        <div className="day-name">Thu</div>
        <div className="day-name">Fri</div>
        <div className="day-name">Sat</div>

        {daysGrid.map((day, index) => (
          <div key={index} className={index < firstDayOfWeek ? 'empty-cell' : 'calendar-cell'}>
            {index >= firstDayOfWeek ? day : ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarBody;

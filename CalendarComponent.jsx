import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [slots, setSlots] = useState([]);

  const handleAddSlot = () => {
    const newSlot = {
      id: Date.now(),
      date: date.toDateString(),
    };
    setSlots([...slots, newSlot]);
  };

  const handleDelete = (id) => {
    setSlots(slots.filter((slot) => slot.id !== id));
  };

  return (
    <div className="p-4">
      <h2>Meeting Scheduler</h2>

      <Calendar onChange={setDate} value={date} />

      <button onClick={handleAddSlot} className="btn">
        Add Availability
      </button>

      <ul>
        {slots.map((slot) => (
          <li key={slot.id}>
            {slot.date}
            <button onClick={() => handleDelete(slot.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarComponent;

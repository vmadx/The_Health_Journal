import { useContext } from "react";
import { Star } from "lucide-react";
import { JournalContext } from "../context/JournalContext";

export default function DayTabs() {
  const { selectedDay, setSelectedDay, days } = useContext(JournalContext);

  const handleDayClick = (day) => {
    setSelectedDay(day.label);
  };

  return (
    <div className="day-tabs" aria-label="Week days">
      {days.map((day) => (
        <button
          key={day.label}
          type="button"
          className={`day-tab ${selectedDay === day.label ? "day-tab--active" : ""}`}
          style={{ "--tab-color": day.color }}
          onClick={() => handleDayClick(day)}
          aria-current={selectedDay === day.label ? "date" : undefined}
        >
          <span className="day-tab__label">{day.label}</span>
          <span className="day-tab__date">{day.date}</span>
          {selectedDay === day.label && (
            <Star className="day-tab__star" size={10} fill="currentColor" />
          )}
        </button>
      ))}
    </div>
  );
}

import { Star } from 'lucide-react'

const days = [
  { label: 'MON', date: '20', color: '#f8b4c4', active: false },
  { label: 'TUE', date: '21', color: '#ffc9a8', active: false },
  { label: 'WED', date: '22', color: '#ffe9a0', active: false },
  { label: 'THU', date: '23', color: '#b8e8d0', active: false },
  { label: 'FRI', date: '24', color: '#a8e8e0', active: false },
  { label: 'SAT', date: '25', color: '#b8d4ff', active: false },
  { label: 'SUN', date: '26', color: '#d4c4f8', active: true },
]

export default function DayTabs() {
  return (
    <div className="day-tabs" aria-label="Week days">
      {days.map((day) => (
        <button
          key={day.label}
          type="button"
          className={`day-tab ${day.active ? 'day-tab--active' : ''}`}
          style={{ '--tab-color': day.color }}
          aria-current={day.active ? 'date' : undefined}
        >
          <span className="day-tab__label">{day.label}</span>
          <span className="day-tab__date">{day.date}</span>
          {day.active && <Star className="day-tab__star" size={10} fill="currentColor" />}
        </button>
      ))}
    </div>
  )
}

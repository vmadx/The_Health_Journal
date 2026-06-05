import {
  Home,
  BarChart3,
  Calendar,
  Heart,
  Dumbbell,
  Moon,
  Settings,
} from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Calendar, label: 'Calendar' },
  { icon: Heart, label: 'Heart' },
  { icon: Dumbbell, label: 'Workouts' },
  { icon: Moon, label: 'Sleep' },
  { icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  return (
    <nav className="sidebar" aria-label="Main navigation">
      {navItems.map(({ icon: Icon, label, active }) => (
        <button
          key={label}
          type="button"
          className={`sidebar__btn ${active ? 'sidebar__btn--active' : ''}`}
          aria-label={label}
          aria-current={active ? 'page' : undefined}
        >
          <Icon size={20} strokeWidth={1.75} />
        </button>
      ))}
    </nav>
  )
}

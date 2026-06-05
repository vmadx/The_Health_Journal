import { Search, Sun, Bell, ChevronDown } from 'lucide-react'

export default function Header() {
  return (
    <header className="top-header">
      <button type="button" className="top-header__icon" aria-label="Search">
        <Search size={18} strokeWidth={1.75} />
      </button>
      <button type="button" className="top-header__icon" aria-label="Toggle theme">
        <Sun size={18} strokeWidth={1.75} />
      </button>
      <button type="button" className="top-header__icon top-header__icon--bell" aria-label="Notifications">
        <Bell size={18} strokeWidth={1.75} />
        <span className="top-header__dot" />
      </button>
      <button type="button" className="top-header__profile" aria-label="Profile menu">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
          alt=""
          className="top-header__avatar"
        />
        <ChevronDown size={14} strokeWidth={2} />
      </button>
    </header>
  )
}

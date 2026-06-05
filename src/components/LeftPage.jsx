import { ChevronDown, Heart } from 'lucide-react'
import HealthOverview from './HealthOverview'
import ConnectedApps from './ConnectedApps'
import JournalSection from './JournalSection'
import MoodTracker from './MoodTracker'

export default function LeftPage() {
  return (
    <div className="page page--left">
      <div className="page-header">
        <h1 className="diary-title">
          My Health Diary
          <Heart className="diary-title__heart" size={18} fill="#f5a8b8" stroke="#f5a8b8" />
        </h1>
        <button type="button" className="date-range">
          May 20 – May 26, 2024
          <ChevronDown size={14} strokeWidth={2} />
        </button>
        <div className="week-banner">
          <span>This week, I choose me</span>
          <span className="week-banner__heart">♡</span>
        </div>
      </div>

      <HealthOverview />
      <ConnectedApps />
      <JournalSection />
      <MoodTracker />
    </div>
  )
}

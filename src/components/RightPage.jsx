import WorkoutSection from './WorkoutSection'
import WeeklyActivity from './WeeklyActivity'
import WaterIntake from './WaterIntake'
import Affirmation from './Affirmation'

export default function RightPage() {
  return (
    <div className="page page--right">
      <WorkoutSection />
      <WeeklyActivity />
      <WaterIntake />
      <Affirmation />
    </div>
  )
}

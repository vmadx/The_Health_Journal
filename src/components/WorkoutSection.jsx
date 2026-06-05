import { Plus, Flower2 } from 'lucide-react'

const exercises = [
  { name: 'Barbell Squat', sets: '4', reps: '8', weight: '135 lbs' },
  { name: 'Romanian Deadlift', sets: '3', reps: '10', weight: '115 lbs' },
  { name: 'Leg Press', sets: '3', reps: '12', weight: '270 lbs' },
  { name: 'Walking Lunges', sets: '3', reps: '12', weight: '40 lbs' },
]

export default function WorkoutSection() {
  return (
    <section className="workout-section">
      <div className="workout-header">
        <h2 className="section-title">Saved Workouts</h2>
        <button type="button" className="pill-btn">
          <Plus size={14} strokeWidth={2.5} />
          New Workout
        </button>
      </div>

      <div className="workout-card">
        <div className="workout-card__header">
          <Flower2 size={16} className="workout-card__flower" strokeWidth={1.75} />
          <div>
            <h3 className="workout-card__title">Lower Body Strength</h3>
            <span className="workout-card__date">May 26, 2024</span>
          </div>
        </div>

        <div className="workout-table-wrap">
          <table className="workout-table">
            <thead>
              <tr>
                <th>Exercise</th>
                <th>Sets</th>
                <th>Reps</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              {exercises.map((ex) => (
                <tr key={ex.name}>
                  <td>{ex.name}</td>
                  <td>{ex.sets}</td>
                  <td>{ex.reps}</td>
                  <td>{ex.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button type="button" className="add-exercise-btn">
          <Plus size={14} strokeWidth={2} />
          Add Exercise
        </button>

        <div className="dumbbell-sticker" aria-hidden="true">
          <span className="dumbbell-sticker__bar" />
          <span className="dumbbell-sticker__weight dumbbell-sticker__weight--l" />
          <span className="dumbbell-sticker__weight dumbbell-sticker__weight--r" />
        </div>
      </div>
    </section>
  )
}

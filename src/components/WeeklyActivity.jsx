const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const data = [
  { move: 55, exercise: 30, stand: 25 },
  { move: 45, exercise: 35, stand: 30 },
  { move: 60, exercise: 25, stand: 20 },
  { move: 40, exercise: 40, stand: 35 },
  { move: 70, exercise: 20, stand: 25 },
  { move: 50, exercise: 30, stand: 40 },
  { move: 65, exercise: 25, stand: 30 },
]

export default function WeeklyActivity() {
  return (
    <section className="weekly-activity">
      <h2 className="section-title">Weekly Activity</h2>
      <div className="activity-chart-wrap">
        <div className="activity-legend">
          <span className="legend-item">
            <i className="legend-dot legend-dot--move" /> Move
          </span>
          <span className="legend-item">
            <i className="legend-dot legend-dot--exercise" /> Exercise
          </span>
          <span className="legend-item">
            <i className="legend-dot legend-dot--stand" /> Stand
          </span>
        </div>

        <div className="activity-chart">
          {data.map((d, i) => {
            const total = d.move + d.exercise + d.stand
            return (
              <div key={days[i]} className="activity-bar-group">
                <div
                  className="activity-bar-stack"
                  style={{ height: `${(total / 135) * 100}%` }}
                >
                  <div
                    className="activity-bar activity-bar--stand"
                    style={{ flex: d.stand }}
                  />
                  <div
                    className="activity-bar activity-bar--exercise"
                    style={{ flex: d.exercise }}
                  />
                  <div
                    className="activity-bar activity-bar--move"
                    style={{ flex: d.move }}
                  />
                </div>
                <span className="activity-bar-label">{days[i]}</span>
              </div>
            )
          })}
        </div>

        <div className="sticky-note" aria-hidden="true">
          <span>Keep going!</span>
          <span className="sticky-note__heart">♡</span>
        </div>
      </div>
    </section>
  )
}

const moods = [
  { emoji: '😢', bg: '#ffd4e8', label: 'Sad' },
  { emoji: '😕', bg: '#ffe0c8', label: 'Down' },
  { emoji: '😐', bg: '#fff0c8', label: 'Okay' },
  { emoji: '🙂', bg: '#d8f0e0', label: 'Good' },
  { emoji: '😊', bg: '#d8e8ff', label: 'Happy' },
  { emoji: '🥰', bg: '#e8d8f8', label: 'Loved', active: true },
]

export default function MoodTracker() {
  return (
    <section className="mood-tracker">
      <p className="mood-tracker__prompt">How was your day?</p>
      <div className="mood-row">
        {moods.map((mood) => (
          <button
            key={mood.label}
            type="button"
            className={`mood-btn ${mood.active ? 'mood-btn--active' : ''}`}
            style={{ background: mood.bg }}
            aria-label={mood.label}
            aria-pressed={mood.active}
          >
            <span>{mood.emoji}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

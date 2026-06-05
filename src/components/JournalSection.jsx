export default function JournalSection() {
  return (
    <section className="journal-section">
      <h2 className="section-title">Today&apos;s Journal</h2>
      <div className="journal-paper">
        <div className="journal-paper__tape journal-paper__tape--left" />
        <div className="journal-paper__tape journal-paper__tape--right" />

        <p className="journal-text">
          Felt strong today! 💪 Morning run was refreshing. Hit my step goal
          before lunch. Need to drink more water this afternoon.
        </p>

        <div className="note-to-self">
          <span className="note-to-self__label">Note to self</span>
          <p>Progress, not perfection.</p>
        </div>

        <div className="polaroid">
          <div className="polaroid__tape" />
          <div className="polaroid__image" role="img" aria-label="Sunset photo" />
        </div>

        <span className="sticker-deco sticker-deco--flower" aria-hidden="true">
          🌸
        </span>
        <span className="sticker-deco sticker-deco--heart" aria-hidden="true">
          💗
        </span>
        <span className="sticker-deco sticker-deco--sparkle" aria-hidden="true">
          ✨
        </span>
      </div>
    </section>
  )
}

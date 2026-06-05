import { Droplets } from 'lucide-react'

export default function WaterIntake() {
  const filled = 6
  const total = 8

  return (
    <section className="water-intake">
      <div className="water-intake__header">
        <div className="water-intake__icon-wrap">
          <Droplets size={16} strokeWidth={2} />
        </div>
        <h2 className="section-title section-title--inline">Water Intake</h2>
        <span className="water-count">
          <strong>{filled}</strong> / {total} cups
        </span>
      </div>
      <div className="water-glasses">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`water-glass ${i < filled ? 'water-glass--filled' : ''}`}
            aria-hidden="true"
          >
            <div className="water-glass__liquid" />
          </div>
        ))}
      </div>
    </section>
  )
}

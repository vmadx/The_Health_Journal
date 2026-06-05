import { Footprints, Flame, Moon, Heart } from 'lucide-react'
import MiniChart from './MiniChart'

const metrics = [
  {
    title: 'Steps',
    value: '8,432',
    sub: '/ 10,000',
    icon: Footprints,
    iconBg: '#d8f5e4',
    iconColor: '#5cb88a',
    chartColor: '#6bc99a',
    variant: 'default',
  },
  {
    title: 'Active Calories',
    value: '486',
    sub: 'kcal',
    icon: Flame,
    iconBg: '#ffe8d4',
    iconColor: '#e8a060',
    chartColor: '#f0a868',
    variant: 'default',
  },
  {
    title: 'Sleep',
    value: '7h 23m',
    sub: '',
    icon: Moon,
    iconBg: '#e8dff8',
    iconColor: '#9b7ec8',
    chartColor: '#a88ed4',
    variant: 'sleep',
  },
  {
    title: 'Heart Rate',
    value: '72',
    sub: 'bpm',
    icon: Heart,
    iconBg: '#fce0e8',
    iconColor: '#e87898',
    chartColor: '#ec88a8',
    variant: 'heart',
  },
]

export default function HealthOverview() {
  return (
    <section className="health-overview">
      <h2 className="section-title">Health Overview</h2>
      <div className="health-grid">
        {metrics.map((m) => {
          const Icon = m.icon
          return (
            <div key={m.title} className="health-card">
              <div className="health-card__top">
                <div
                  className="health-card__icon-wrap"
                  style={{ background: m.iconBg, color: m.iconColor }}
                >
                  <Icon size={14} strokeWidth={2} />
                </div>
                <span className="health-card__label">{m.title}</span>
              </div>
              <div className="health-card__value">
                <strong>{m.value}</strong>
                {m.sub && <span className="health-card__sub">{m.sub}</span>}
              </div>
              <MiniChart color={m.chartColor} variant={m.variant} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

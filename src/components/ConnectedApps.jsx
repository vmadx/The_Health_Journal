import { Plus, Smartphone, Activity, Watch } from 'lucide-react'

const apps = [
  {
    name: 'Health Connect',
    status: 'Connected',
    icon: Smartphone,
    iconBg: '#e8dff8',
    iconColor: '#8b7ec8',
  },
  {
    name: 'Google Fit',
    status: 'Connected',
    icon: Activity,
    iconBg: '#d8f0ff',
    iconColor: '#5a9fd4',
  },
  {
    name: 'Fitbit',
    status: 'Connected',
    icon: Watch,
    iconBg: '#fce8e0',
    iconColor: '#d87868',
  },
]

export default function ConnectedApps() {
  return (
    <section className="connected-apps">
      <div className="section-header-row">
        <h2 className="section-title">Connected Apps</h2>
        <button type="button" className="link-btn">
          Manage
        </button>
      </div>
      <div className="apps-grid">
        {apps.map((app) => {
          const Icon = app.icon
          return (
            <div key={app.name} className="app-card app-card--placeholder">
              <div
                className="app-card__icon"
                style={{ background: app.iconBg, color: app.iconColor }}
              >
                <Icon size={18} strokeWidth={1.75} />
              </div>
              <span className="app-card__name">{app.name}</span>
              <span className="app-card__status">{app.status}</span>
            </div>
          )
        })}
        <button type="button" className="app-card app-card--connect">
          <div className="app-card__icon app-card__icon--plus">
            <Plus size={20} strokeWidth={2} />
          </div>
          <span className="app-card__name">Connect More</span>
          <span className="app-card__status app-card__status--muted">
            Coming soon
          </span>
        </button>
      </div>
    </section>
  )
}

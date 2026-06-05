import { useState } from 'react'
import { Plus } from 'lucide-react'

const tabs = ['Stickers', 'Brushes', 'Notes']
const categories = ['All', 'Cute', 'Health', 'Nature', 'Food']

const stickers = [
  { id: 1, content: '💗', type: 'emoji' },
  { id: 2, content: '🌸', type: 'emoji' },
  { id: 3, content: '⭐', type: 'emoji' },
  { id: 4, content: '😊', type: 'emoji' },
  { id: 5, type: 'tape', color: '#f8c8d8' },
  { id: 6, type: 'tape', color: '#c8e8f8' },
  { id: 7, content: '🌿', type: 'emoji' },
  { id: 8, content: '☀️', type: 'emoji' },
  { id: 9, content: '💧', type: 'emoji' },
  { id: 10, content: '👟', type: 'emoji' },
  { id: 11, content: '🥑', type: 'emoji' },
  { id: 12, content: '📷', type: 'emoji' },
  { id: 13, content: '🦋', type: 'emoji' },
  { id: 14, content: '🍎', type: 'emoji' },
  { id: 15, content: '💪', type: 'emoji' },
  { id: 16, content: '🌈', type: 'emoji' },
  { id: 17, type: 'heart', color: '#f8a8c0' },
  { id: 18, type: 'flower', color: '#f8c878' },
  { id: 19, content: '🎀', type: 'emoji' },
  { id: 20, content: '🧘', type: 'emoji' },
]

function StickerItem({ sticker }) {
  if (sticker.type === 'tape') {
    return (
      <div className="sticker-item sticker-item--tape">
        <div className="washi-tape" style={{ background: sticker.color }} />
      </div>
    )
  }
  if (sticker.type === 'heart') {
    return (
      <div className="sticker-item">
        <svg viewBox="0 0 24 24" className="sticker-svg">
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill={sticker.color}
          />
        </svg>
      </div>
    )
  }
  if (sticker.type === 'flower') {
    return (
      <div className="sticker-item">
        <span className="sticker-flower" style={{ color: sticker.color }}>
          ✿
        </span>
      </div>
    )
  }
  return (
    <div className="sticker-item">
      <span className="sticker-emoji">{sticker.content}</span>
    </div>
  )
}

export default function StickerPanel() {
  const [activeTab, setActiveTab] = useState('Stickers')
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <aside className="sticker-panel">
      <div className="sticker-panel__tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`sticker-tab ${activeTab === tab ? 'sticker-tab--active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="sticker-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`category-chip ${activeCategory === cat ? 'category-chip--active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="sticker-grid">
        {stickers.map((s) => (
          <StickerItem key={s.id} sticker={s} />
        ))}
      </div>

      <button type="button" className="upload-sticker-btn">
        <Plus size={16} strokeWidth={2.5} />
        Upload Sticker
      </button>
    </aside>
  )
}

import {
  Type,
  Pen,
  Pencil,
  Eraser,
  Image,
  Smile,
  Layers,
  List,
  AlignCenter,
  Undo2,
  Redo2,
  Trash2,
  Share2,
} from 'lucide-react'

const tools = [
  { icon: Type, label: 'Text' },
  { icon: Pen, label: 'Pen' },
  { icon: Pencil, label: 'Pencil' },
  { icon: Eraser, label: 'Eraser' },
  { icon: Image, label: 'Image' },
  { icon: Smile, label: 'Emoji' },
  { icon: Layers, label: 'Layers' },
  { icon: List, label: 'List' },
  { icon: AlignCenter, label: 'Align' },
  { divider: true },
  { icon: Undo2, label: 'Undo' },
  { icon: Redo2, label: 'Redo' },
  { icon: Trash2, label: 'Delete' },
  { icon: Share2, label: 'Share' },
]

export default function BottomToolbar() {
  return (
    <div className="bottom-toolbar-wrap">
      <div className="bottom-toolbar">
        {tools.map((tool, i) =>
          tool.divider ? (
            <span key={`div-${i}`} className="toolbar-divider" />
          ) : (
            <button
              key={tool.label}
              type="button"
              className="toolbar-btn"
              aria-label={tool.label}
            >
              <tool.icon size={17} strokeWidth={1.75} />
            </button>
          ),
        )}
      </div>
    </div>
  )
}

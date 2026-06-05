export default function MiniChart({ color, variant = 'default' }) {
  const paths = {
    default: 'M2,18 L6,14 L10,16 L14,10 L18,12 L22,6 L26,8 L30,4',
    sleep: 'M2,16 L8,12 L14,14 L20,8 L26,10 L30,6',
    heart: 'M2,14 L8,10 L14,12 L20,8 L26,6 L30,10',
  }

  return (
    <svg className="mini-chart" viewBox="0 0 32 20" aria-hidden="true">
      <path
        d={paths[variant] || paths.default}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

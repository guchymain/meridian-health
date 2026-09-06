import Card from './Card.jsx'

const TONES = {
  text: 'text-text',
  primary: 'text-primary',
  warning: 'text-warning',
  success: 'text-success',
  error: 'text-error',
}

export default function StatTile({ label, value, tone = 'text' }) {
  return (
    <Card className="p-4">
      <p className="text-label text-muted">{label}</p>
      <p className={`mt-1 text-h2 ${TONES[tone]}`}>{value}</p>
    </Card>
  )
}

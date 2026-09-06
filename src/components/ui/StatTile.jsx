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
      <p className={`mt-1 text-[1.7rem] font-semibold leading-none tracking-tight ${TONES[tone]}`}>{value}</p>
    </Card>
  )
}

import StatusBadge from '../../components/ui/StatusBadge.jsx'
import PreviewFrame from './PreviewFrame.jsx'

export function DashboardPreview() {
  return (
    <PreviewFrame>
      <p className="text-label text-muted">Next appointment</p>
      <p className="mt-1 text-body text-text">Dr. Maria Alvarez — Primary Care</p>
      <p className="text-supporting text-muted">Tue, Sep 9 · 10:30 AM · Video visit</p>
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center justify-between rounded-lg border border-border p-3">
          <span className="text-data text-text">Complete intake form</span>
          <StatusBadge tone="warning">Action needed</StatusBadge>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-border p-3">
          <span className="text-data text-text">Lab results are ready</span>
          <StatusBadge tone="success">New</StatusBadge>
        </div>
      </div>
    </PreviewFrame>
  )
}

export function MessagesPreview() {
  return (
    <PreviewFrame>
      <p className="text-label text-muted">Messages</p>
      <div className="mt-3 flex flex-col gap-3">
        <div className="flex gap-3">
          <div className="h-8 w-8 shrink-0 rounded-full bg-info-subtle" />
          <div className="flex-1 rounded-lg rounded-tl-none bg-background p-3">
            <p className="text-data text-text">Your basic metabolic panel looks normal. No action needed.</p>
            <p className="mt-1 text-supporting text-muted">Dr. Alvarez · 9:14 AM</p>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <div className="flex-1 rounded-lg rounded-tr-none bg-info-subtle p-3 text-right">
            <p className="text-data text-text">Thank you! Should I still come in Tuesday?</p>
          </div>
        </div>
      </div>
    </PreviewFrame>
  )
}

export function RecordsPreview() {
  const rows = [
    { label: 'Amoxicillin 500mg', meta: 'Prescribed Aug 2', tone: 'neutral', tag: 'Active' },
    { label: 'Seasonal allergies', meta: 'Ongoing condition', tone: 'neutral', tag: 'Chronic' },
    { label: 'Penicillin', meta: 'Allergy on file', tone: 'error', tag: 'Alert' },
  ]
  return (
    <PreviewFrame>
      <p className="text-label text-muted">Health record</p>
      <div className="mt-3 flex flex-col divide-y divide-border">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between py-2.5">
            <div>
              <p className="text-data text-text">{row.label}</p>
              <p className="text-supporting text-muted">{row.meta}</p>
            </div>
            <StatusBadge tone={row.tone}>{row.tag}</StatusBadge>
          </div>
        ))}
      </div>
    </PreviewFrame>
  )
}

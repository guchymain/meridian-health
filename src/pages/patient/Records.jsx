import Button from '../../components/ui/Button.jsx'
import Card from '../../components/ui/Card.jsx'
import StatusBadge from '../../components/ui/StatusBadge.jsx'
import AppShell from '../../layouts/AppShell.jsx'
import { patientNavItems } from './nav.jsx'

function RecordSection({ title, rows }) {
  return (
    <Card>
      <h3 className="text-h4 text-text">{title}</h3>
      <div className="mt-3 flex flex-col divide-y divide-border">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
            <div>
              <p className="text-body text-text">{row.label}</p>
              <p className="text-supporting text-muted">{row.meta}</p>
            </div>
            {row.tag && <StatusBadge tone={row.tone || 'neutral'}>{row.tag}</StatusBadge>}
          </div>
        ))}
      </div>
    </Card>
  )
}

export default function Records() {
  return (
    <AppShell
      navItems={patientNavItems}
      roleLabel="Patient"
      userName="Jordan Ellis"
      pageTitle="Health record"
    >
      <div className="flex flex-col gap-6">
        <RecordSection
          title="Medications"
          rows={[
            { label: 'Amoxicillin 500mg', meta: 'Prescribed Aug 2, 2026', tag: 'Active' },
            { label: 'Lisinopril 10mg', meta: 'Prescribed Jan 15, 2026', tag: 'Active' },
          ]}
        />
        <RecordSection
          title="Allergies"
          rows={[{ label: 'Penicillin', meta: 'Reported by patient', tag: 'Alert', tone: 'error' }]}
        />
        <RecordSection
          title="Conditions"
          rows={[
            { label: 'Seasonal allergies', meta: 'Ongoing', tag: 'Chronic' },
            { label: 'Hypertension', meta: 'Diagnosed 2024', tag: 'Chronic' },
          ]}
        />
        <RecordSection
          title="Immunizations"
          rows={[
            { label: 'Influenza', meta: 'Sep 2025' },
            { label: 'Tdap', meta: 'Mar 2023' },
          ]}
        />

        <Card>
          <div className="flex items-center justify-between">
            <h3 className="text-h4 text-text">Visit summaries</h3>
            <Button variant="ghost" size="sm">
              View all
            </Button>
          </div>
          <div className="mt-3 flex flex-col divide-y divide-border">
            {[
              { label: 'Primary Care — Dr. Maria Alvarez', meta: 'Aug 12, 2026' },
              { label: 'Primary Care — Dr. Maria Alvarez', meta: 'Jul 2, 2026' },
            ].map((visit) => (
              <div key={visit.meta} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                <div>
                  <p className="text-body text-text">{visit.label}</p>
                  <p className="text-supporting text-muted">{visit.meta}</p>
                </div>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  )
}

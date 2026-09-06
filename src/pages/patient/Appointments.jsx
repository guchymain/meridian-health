import Button from '../../components/ui/Button.jsx'
import Card from '../../components/ui/Card.jsx'
import StatusBadge from '../../components/ui/StatusBadge.jsx'
import AppShell from '../../layouts/AppShell.jsx'
import { patientNavItems } from './nav.jsx'

const upcoming = [
  {
    provider: 'Dr. Maria Alvarez — Primary Care',
    when: 'Tuesday, Sep 9 · 10:30 AM',
    type: 'Video visit',
    status: 'Confirmed',
  },
  {
    provider: 'Dr. Alan Brooks — Dermatology',
    when: 'Thursday, Sep 18 · 2:00 PM',
    type: 'In-person · Main Clinic',
    status: 'Confirmed',
  },
]

const past = [
  { provider: 'Dr. Maria Alvarez — Primary Care', when: 'Aug 12, 2026' },
  { provider: 'Dr. Maria Alvarez — Primary Care', when: 'Jul 2, 2026' },
]

export default function Appointments() {
  return (
    <AppShell
      navItems={patientNavItems}
      roleLabel="Patient"
      userName="Jordan Ellis"
      pageTitle="Appointments"
    >
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h2 className="text-h3 text-text">Upcoming</h2>
          <Button size="sm">Book new appointment</Button>
        </div>

        <div className="flex flex-col gap-3">
          {upcoming.map((appt) => (
            <Card key={appt.when} className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-body text-text">{appt.provider}</p>
                <p className="mt-1 text-supporting text-muted">
                  {appt.when} · {appt.type}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge tone="success">{appt.status}</StatusBadge>
                <Button variant="secondary" size="sm">
                  Reschedule
                </Button>
                {appt.type === 'Video visit' ? (
                  <Button size="sm">Join visit</Button>
                ) : (
                  <Button variant="ghost" size="sm">
                    Cancel
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div>
          <h2 className="text-h3 text-text">Past</h2>
          <div className="mt-4 flex flex-col gap-3">
            {past.map((appt) => (
              <Card key={appt.when} className="flex items-center justify-between p-4">
                <div>
                  <p className="text-body text-text">{appt.provider}</p>
                  <p className="text-supporting text-muted">{appt.when}</p>
                </div>
                <Button variant="ghost" size="sm">
                  View summary
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  )
}

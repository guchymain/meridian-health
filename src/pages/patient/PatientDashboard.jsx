import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button.jsx'
import Card from '../../components/ui/Card.jsx'
import StatusBadge from '../../components/ui/StatusBadge.jsx'
import AppShell from '../../layouts/AppShell.jsx'
import { patientNavItems } from './nav.jsx'

const actionItems = [
  {
    id: 1,
    title: 'Complete pre-visit intake form',
    detail: 'Due before your appointment on Sep 9',
    tone: 'warning',
    tag: 'Action needed',
    to: '/patient/appointments',
  },
  {
    id: 2,
    title: 'New message from Dr. Alvarez',
    detail: 'Re: your recent lab results',
    tone: 'info',
    tag: 'Unread',
    to: '/patient/messages',
  },
  {
    id: 3,
    title: 'Lab results are ready',
    detail: 'Basic metabolic panel — reviewed by your provider',
    tone: 'success',
    tag: 'New',
    to: '/patient/records',
  },
]

export default function PatientDashboard() {
  return (
    <AppShell
      navItems={patientNavItems}
      roleLabel="Patient"
      userName="Jordan Ellis"
      pageTitle="Home"
    >
      <div className="flex flex-col gap-8">
        <section>
          <Card className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-label text-muted">Next appointment</p>
              <h2 className="mt-1 text-h2 text-text">Dr. Maria Alvarez — Primary Care</h2>
              <p className="mt-1 text-body text-muted">Tuesday, Sep 9 · 10:30 AM · Video visit</p>
            </div>
            <div className="flex gap-3">
              <Link to="/patient/appointments">
                <Button variant="secondary">Reschedule</Button>
              </Link>
              <Link to="/patient/appointments">
                <Button variant="primary">Join visit</Button>
              </Link>
            </div>
          </Card>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-h3 text-text">Needs your attention</h3>
          </div>
          <div className="flex flex-col gap-3">
            {actionItems.map((item) => (
              <Link key={item.id} to={item.to}>
                <Card className="flex items-center justify-between gap-4 p-4 hover:border-border-strong">
                  <div className="min-w-0">
                    <p className="truncate text-body text-text">{item.title}</p>
                    <p className="truncate text-supporting text-muted">{item.detail}</p>
                  </div>
                  <StatusBadge tone={item.tone}>{item.tag}</StatusBadge>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-h3 text-text">Quick actions</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Card className="flex flex-col gap-2">
              <p className="text-body text-text">Book an appointment</p>
              <p className="text-supporting text-muted">Find care by provider or reason for visit</p>
              <Link to="/patient/appointments" className="mt-2 self-start">
                <Button variant="secondary" size="sm">
                  Book now
                </Button>
              </Link>
            </Card>
            <Card className="flex flex-col gap-2">
              <p className="text-body text-text">Request a prescription refill</p>
              <p className="text-supporting text-muted">Sent directly to your pharmacy</p>
              <Link to="/patient/records" className="mt-2 self-start">
                <Button variant="secondary" size="sm">
                  Request refill
                </Button>
              </Link>
            </Card>
            <Card className="flex flex-col gap-2">
              <p className="text-body text-text">Pay a bill</p>
              <p className="text-supporting text-muted">View statements and payment options</p>
              <Link to="/patient/billing" className="mt-2 self-start">
                <Button variant="secondary" size="sm">
                  View billing
                </Button>
              </Link>
            </Card>
          </div>
        </section>
      </div>
    </AppShell>
  )
}

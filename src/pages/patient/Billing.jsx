import Button from '../../components/ui/Button.jsx'
import Card from '../../components/ui/Card.jsx'
import StatusBadge from '../../components/ui/StatusBadge.jsx'
import AppShell from '../../layouts/AppShell.jsx'
import { patientNavItems } from './nav.jsx'

const statements = [
  { desc: 'Primary Care visit — Dr. Alvarez', date: 'Sep 1, 2026', amount: '$45.00', tone: 'warning', tag: 'Due' },
  { desc: 'Video visit — Dr. Alvarez', date: 'Aug 1, 2026', amount: '$30.00', tone: 'success', tag: 'Paid' },
  { desc: 'Dermatology visit — Dr. Brooks', date: 'Jun 18, 2026', amount: '$60.00', tone: 'success', tag: 'Paid' },
]

export default function Billing() {
  return (
    <AppShell
      navItems={patientNavItems}
      roleLabel="Patient"
      userName="Jordan Ellis"
      pageTitle="Billing"
    >
      <div className="flex flex-col gap-6">
        <Card className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-label text-muted">Amount due</p>
            <p className="mt-1 text-h1 text-text">$45.00</p>
            <p className="mt-1 text-supporting text-muted">Due Sep 15, 2026</p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary">Set up payment plan</Button>
            <Button>Pay a bill</Button>
          </div>
        </Card>

        <Card className="p-0">
          <div className="border-b border-border p-4">
            <h3 className="text-h4 text-text">Statements</h3>
          </div>
          <div className="flex flex-col divide-y divide-border">
            {statements.map((s) => (
              <div key={s.date} className="flex items-center justify-between p-4">
                <div>
                  <p className="text-body text-text">{s.desc}</p>
                  <p className="text-supporting text-muted">{s.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-data text-text">{s.amount}</span>
                  <StatusBadge tone={s.tone}>{s.tag}</StatusBadge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <h3 className="text-h4 text-text">Insurance on file</h3>
            <p className="mt-3 text-body text-text">Blue Shield PPO</p>
            <p className="text-supporting text-muted">Member ID •••• 1234</p>
            <Button variant="ghost" size="sm" className="mt-3">
              Update insurance
            </Button>
          </Card>
          <Card>
            <h3 className="text-h4 text-text">Payment method</h3>
            <p className="mt-3 text-body text-text">Visa ending in 4242</p>
            <p className="text-supporting text-muted">Expires 08/28</p>
            <Button variant="ghost" size="sm" className="mt-3">
              Update payment method
            </Button>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}

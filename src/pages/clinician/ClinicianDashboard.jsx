import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button.jsx'
import Card from '../../components/ui/Card.jsx'
import SearchInput from '../../components/ui/SearchInput.jsx'
import StatTile from '../../components/ui/StatTile.jsx'
import StatusBadge from '../../components/ui/StatusBadge.jsx'
import AppShell from '../../layouts/AppShell.jsx'
import { clinicianNavItems } from './nav.jsx'

const STATUS_TONE = {
  Waiting: 'neutral',
  'In progress': 'info',
  Completed: 'success',
}

const queue = [
  {
    time: '9:00 AM',
    patient: 'Sarah Chen',
    reason: 'Annual physical',
    type: 'In-person',
    status: 'Waiting',
  },
  {
    time: '9:30 AM',
    patient: 'James Okafor',
    reason: 'Follow-up: hypertension',
    type: 'Video',
    status: 'Waiting',
  },
  {
    time: '10:00 AM',
    patient: 'Maria Gonzalez',
    reason: 'Sore throat, 3 days',
    type: 'In-person',
    status: 'In progress',
  },
  {
    time: '10:30 AM',
    patient: 'David Kim',
    reason: 'Medication review',
    type: 'Video',
    status: 'Completed',
  },
  {
    time: '11:00 AM',
    patient: 'Linda Torres',
    reason: 'Annual physical',
    type: 'In-person',
    status: 'Waiting',
  },
  {
    time: '11:30 AM',
    patient: 'Robert Ellis',
    reason: 'Diabetes follow-up',
    type: 'In-person',
    status: 'Waiting',
  },
]

const inboxItems = [
  { label: 'Results to review', count: 4, tone: 'warning' },
  { label: 'Refill requests', count: 2, tone: 'info' },
  { label: 'Patient messages', count: 5, tone: 'info' },
  { label: 'Notes awaiting signature', count: 1, tone: 'error' },
]

function TypeCell({ type }) {
  const isVideo = type === 'Video'
  return (
    <span className="inline-flex items-center gap-1.5 text-data text-muted">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {isVideo ? (
          <path
            d="M15 10l6-3v10l-6-3M3 6h12v12H3V6z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
      {type}
    </span>
  )
}

function QueueAction({ status, type }) {
  if (status === 'Completed') {
    return (
      <Link to="/clinician/patients">
        <Button variant="ghost" size="sm">
          View note
        </Button>
      </Link>
    )
  }
  if (type === 'Video') {
    return <Button size="sm">Start visit</Button>
  }
  return (
    <Link to="/clinician/patients">
      <Button variant="secondary" size="sm">
        Open chart
      </Button>
    </Link>
  )
}

export default function ClinicianDashboard() {
  return (
    <AppShell
      navItems={clinicianNavItems}
      roleLabel="Clinician"
      userName="Dr. Priya Nair"
      pageTitle="Today"
    >
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatTile label="Today's visits" value="6" />
          <StatTile label="In progress" value="1" tone="primary" />
          <StatTile label="Completed" value="1" tone="success" />
          <StatTile label="Notes to sign" value="1" tone="error" />
        </div>

        <SearchInput placeholder="Search patients by name or MRN" className="max-w-sm" />

        <div className="grid gap-6 wide:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0">
            <Card className="overflow-hidden p-0">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="px-4 py-2.5 text-label text-muted">Time</th>
                      <th className="px-4 py-2.5 text-label text-muted">Patient</th>
                      <th className="hidden px-4 py-2.5 text-label text-muted wide:table-cell">
                        Reason
                      </th>
                      <th className="hidden px-4 py-2.5 text-label text-muted sm:table-cell">
                        Type
                      </th>
                      <th className="px-4 py-2.5 text-label text-muted">Status</th>
                      <th className="px-4 py-2.5 text-label text-muted" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {queue.map((row) => (
                      <tr key={row.patient} className="text-data text-text">
                        <td className="whitespace-nowrap px-4 py-3 text-muted">{row.time}</td>
                        <td className="whitespace-nowrap px-4 py-3 font-medium">{row.patient}</td>
                        <td className="hidden px-4 py-3 text-muted wide:table-cell">{row.reason}</td>
                        <td className="hidden whitespace-nowrap px-4 py-3 sm:table-cell">
                          <TypeCell type={row.type} />
                        </td>
                        <td className="whitespace-nowrap px-4 py-3">
                          <StatusBadge tone={STATUS_TONE[row.status]}>{row.status}</StatusBadge>
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-right">
                          <QueueAction status={row.status} type={row.type} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          <div>
            <Card>
              <h3 className="text-h4 text-text">Inbox</h3>
              <div className="mt-4 flex flex-col divide-y divide-border">
                {inboxItems.map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                    <span className="text-body text-text">{item.label}</span>
                    <StatusBadge tone={item.tone}>{item.count}</StatusBadge>
                  </div>
                ))}
              </div>
              <Link to="/clinician/inbox">
                <Button variant="secondary" size="sm" className="mt-4 w-full">
                  Go to inbox
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  )
}

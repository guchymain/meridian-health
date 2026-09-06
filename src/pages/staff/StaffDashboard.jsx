import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button.jsx'
import Card from '../../components/ui/Card.jsx'
import SearchInput from '../../components/ui/SearchInput.jsx'
import StatTile from '../../components/ui/StatTile.jsx'
import StatusBadge from '../../components/ui/StatusBadge.jsx'
import AppShell from '../../layouts/AppShell.jsx'
import { staffNavItems } from './nav.jsx'

const STATUS_TONE = {
  Waiting: 'neutral',
  'Checked in': 'info',
  'No-show': 'error',
  Completed: 'success',
}

const schedule = [
  {
    time: '9:00 AM',
    patient: 'Sarah Chen',
    provider: 'Dr. Priya Nair',
    location: 'Room 2',
    status: 'Checked in',
  },
  {
    time: '9:30 AM',
    patient: 'James Okafor',
    provider: 'Dr. Priya Nair',
    location: 'Video',
    status: 'Waiting',
  },
  {
    time: '10:00 AM',
    patient: 'Maria Gonzalez',
    provider: 'Dr. Priya Nair',
    location: 'Room 1',
    status: 'Checked in',
  },
  {
    time: '10:15 AM',
    patient: 'Alicia Byrne',
    provider: 'Dr. Alan Brooks',
    location: 'Room 3',
    status: 'No-show',
  },
  {
    time: '10:30 AM',
    patient: 'David Kim',
    provider: 'Dr. Priya Nair',
    location: 'Video',
    status: 'Completed',
  },
  {
    time: '11:00 AM',
    patient: 'Linda Torres',
    provider: 'Dr. Priya Nair',
    location: 'Room 2',
    status: 'Waiting',
  },
]

function ScheduleAction({ status }) {
  if (status === 'Waiting') return <Button size="sm">Check in</Button>
  if (status === 'No-show')
    return (
      <Button variant="ghost" size="sm">
        Reschedule
      </Button>
    )
  return (
    <Button variant="ghost" size="sm">
      View
    </Button>
  )
}

export default function StaffDashboard() {
  return (
    <AppShell
      navItems={staffNavItems}
      roleLabel="Front desk"
      userName="Jamie Rivera"
      pageTitle="Today"
    >
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatTile label="Checked in" value="2" tone="primary" />
          <StatTile label="Waiting" value="2" />
          <StatTile label="No-shows" value="1" tone="error" />
          <StatTile label="Total today" value="6" />
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
                        Provider
                      </th>
                      <th className="hidden px-4 py-2.5 text-label text-muted sm:table-cell">
                        Location
                      </th>
                      <th className="px-4 py-2.5 text-label text-muted">Status</th>
                      <th className="px-4 py-2.5 text-label text-muted" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {schedule.map((row) => (
                      <tr key={row.time + row.patient} className="text-data text-text">
                        <td className="whitespace-nowrap px-4 py-3 text-muted">{row.time}</td>
                        <td className="whitespace-nowrap px-4 py-3 font-medium">{row.patient}</td>
                        <td className="hidden whitespace-nowrap px-4 py-3 text-muted wide:table-cell">
                          {row.provider}
                        </td>
                        <td className="hidden whitespace-nowrap px-4 py-3 text-muted sm:table-cell">
                          {row.location}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3">
                          <StatusBadge tone={STATUS_TONE[row.status]}>{row.status}</StatusBadge>
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-right">
                          <ScheduleAction status={row.status} />
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
              <h3 className="text-h4 text-text">Needs attention</h3>
              <div className="mt-4 flex flex-col divide-y divide-border">
                <div className="py-3 first:pt-0">
                  <p className="text-body text-text">Alicia Byrne</p>
                  <p className="text-supporting text-muted">Missing insurance card</p>
                </div>
                <div className="py-3">
                  <p className="text-body text-text">Robert Ellis</p>
                  <p className="text-supporting text-muted">Intake form incomplete</p>
                </div>
                <div className="flex items-center justify-between py-3 last:pb-0">
                  <span className="text-body text-text">Claims denied this week</span>
                  <StatusBadge tone="error">3</StatusBadge>
                </div>
              </div>
              <Link to="/staff/billing">
                <Button variant="secondary" size="sm" className="mt-4 w-full">
                  Go to billing
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  )
}

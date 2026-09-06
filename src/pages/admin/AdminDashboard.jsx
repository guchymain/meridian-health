import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button.jsx'
import Card from '../../components/ui/Card.jsx'
import StatTile from '../../components/ui/StatTile.jsx'
import AppShell from '../../layouts/AppShell.jsx'
import { adminNavItems } from './nav.jsx'

function Icon({ d }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d={d} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const managementLinks = [
  {
    to: '/admin/organization',
    title: 'Organization',
    description: 'Clinics, departments, and provider rosters',
    icon: 'M4 21V7l8-4 8 4v14M9 21v-6h6v6M4 21h16',
  },
  {
    to: '/admin/users',
    title: 'Users & roles',
    description: 'Provision staff and manage permissions',
    icon: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4.4 3.6-8 8-8s8 3.6 8 8',
  },
  {
    to: '/admin/audit-log',
    title: 'Audit log',
    description: 'Review access and record-level activity',
    icon: 'M8 3h8l4 4v14H4V3h4zM8 3v4H4M8 12h8M8 16h8',
  },
  {
    to: '/admin/settings',
    title: 'Settings',
    description: 'Scheduling rules, templates, and billing config',
    icon: 'M12 15a3 3 0 100-6 3 3 0 000 6zM19 12a7 7 0 00-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 00-2-1.2L14 3h-4l-.5 2.6a7 7 0 00-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 005 12a7 7 0 00.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 002 1.2L10 21h4l.5-2.6a7 7 0 002-1.2l2.4 1 2-3.4-2-1.6c.07-.4.1-.8.1-1.2z',
  },
]

const activity = [
  { actor: 'Dr. Priya Nair', action: 'viewed chart', record: 'Sarah Chen', time: '9:42 AM' },
  {
    actor: 'Jamie Rivera (Front desk)',
    action: 'updated insurance',
    record: 'Alicia Byrne',
    time: '9:15 AM',
  },
  { actor: 'You', action: 'invited user', record: 'New nurse account', time: 'Yesterday' },
  { actor: 'Dr. Alan Brooks', action: 'signed note', record: 'David Kim', time: 'Yesterday' },
  {
    actor: 'System',
    action: 'credential expiring in 14 days',
    record: 'Dr. Priya Nair',
    time: '2 days ago',
  },
]

export default function AdminDashboard() {
  return (
    <AppShell
      navItems={adminNavItems}
      roleLabel="Org admin"
      userName="Morgan Lee"
      pageTitle="Overview"
    >
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatTile label="Active users" value="42" />
          <StatTile label="Clinics" value="3" />
          <StatTile label="Credential renewals due" value="2" tone="warning" />
          <StatTile label="Open compliance flags" value="1" tone="error" />
        </div>

        <div>
          <h2 className="mb-4 text-h3 text-text">Manage</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {managementLinks.map((link) => (
              <Card key={link.to} className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-info-subtle text-primary">
                  <Icon d={link.icon} />
                </div>
                <h3 className="text-h4 text-text">{link.title}</h3>
                <p className="text-supporting text-muted">{link.description}</p>
                <Link to={link.to} className="mt-1">
                  <Button variant="ghost" size="sm">
                    Open →
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-0">
          <div className="border-b border-border p-4">
            <h3 className="text-h4 text-text">Recent activity</h3>
          </div>
          <div className="flex flex-col divide-y divide-border">
            {activity.map((item, i) => (
              <div key={i} className="flex items-center justify-between gap-4 p-4">
                <p className="text-body text-text">
                  <span className="font-medium">{item.actor}</span> {item.action} —{' '}
                  <span className="text-muted">{item.record}</span>
                </p>
                <span className="shrink-0 text-supporting text-muted">{item.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  )
}

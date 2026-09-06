import Button from '../../components/ui/Button.jsx'
import Card from '../../components/ui/Card.jsx'
import StatTile from '../../components/ui/StatTile.jsx'
import StatusBadge from '../../components/ui/StatusBadge.jsx'
import AppShell from '../../layouts/AppShell.jsx'
import { clinicianNavItems } from './nav.jsx'

const STATUS_TONE = {
  Pending: 'neutral',
  'In progress': 'info',
  Completed: 'success',
  Cancelled: 'error',
}

const orders = [
  {
    patient: 'Sarah Chen',
    type: 'Lab',
    description: 'CBC with differential',
    date: 'Sep 5, 2026',
    status: 'Pending',
  },
  {
    patient: 'James Okafor',
    type: 'Prescription',
    description: 'Lisinopril 10mg refill',
    date: 'Sep 5, 2026',
    status: 'Completed',
  },
  {
    patient: 'Maria Gonzalez',
    type: 'Lab',
    description: 'Rapid strep test',
    date: 'Sep 6, 2026',
    status: 'In progress',
  },
  {
    patient: 'David Kim',
    type: 'Referral',
    description: 'Cardiology consult',
    date: 'Sep 4, 2026',
    status: 'Pending',
  },
  {
    patient: 'Linda Torres',
    type: 'Imaging',
    description: 'Chest X-ray',
    date: 'Sep 3, 2026',
    status: 'Completed',
  },
  {
    patient: 'Robert Ellis',
    type: 'Lab',
    description: 'A1C panel',
    date: 'Sep 6, 2026',
    status: 'Pending',
  },
]

export default function Orders() {
  return (
    <AppShell
      navItems={clinicianNavItems}
      roleLabel="Clinician"
      userName="Dr. Priya Nair"
      pageTitle="Orders"
    >
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatTile label="Pending" value="3" />
          <StatTile label="In progress" value="1" tone="primary" />
          <StatTile label="Completed" value="2" tone="success" />
          <StatTile label="Cancelled" value="0" tone="error" />
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-h3 text-text">All orders</h2>
          <Button size="sm">New order</Button>
        </div>

        <Card className="overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="px-4 py-2.5 text-label text-muted">Patient</th>
                  <th className="px-4 py-2.5 text-label text-muted">Type</th>
                  <th className="hidden px-4 py-2.5 text-label text-muted wide:table-cell">
                    Description
                  </th>
                  <th className="hidden px-4 py-2.5 text-label text-muted sm:table-cell">
                    Ordered
                  </th>
                  <th className="px-4 py-2.5 text-label text-muted">Status</th>
                  <th className="px-4 py-2.5 text-label text-muted" />
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {orders.map((order, i) => (
                  <tr key={i} className="text-data text-text">
                    <td className="whitespace-nowrap px-4 py-3 font-medium">{order.patient}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-muted">{order.type}</td>
                    <td className="hidden px-4 py-3 text-muted wide:table-cell">
                      {order.description}
                    </td>
                    <td className="hidden whitespace-nowrap px-4 py-3 text-muted sm:table-cell">
                      {order.date}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <StatusBadge tone={STATUS_TONE[order.status]}>{order.status}</StatusBadge>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </AppShell>
  )
}

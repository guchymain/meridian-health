import Button from '../../components/ui/Button.jsx'
import Card from '../../components/ui/Card.jsx'
import SearchInput from '../../components/ui/SearchInput.jsx'
import StatusBadge from '../../components/ui/StatusBadge.jsx'
import AppShell from '../../layouts/AppShell.jsx'
import { clinicianNavItems } from './nav.jsx'

const patients = [
  {
    name: 'Sarah Chen',
    mrn: 'MRN 00214',
    dob: '03/12/1988',
    lastVisit: 'Sep 6, 2026',
    flags: [],
  },
  {
    name: 'James Okafor',
    mrn: 'MRN 00588',
    dob: '11/02/1975',
    lastVisit: 'Sep 6, 2026',
    flags: [{ tone: 'warning', label: 'Hypertension' }],
  },
  {
    name: 'Maria Gonzalez',
    mrn: 'MRN 00976',
    dob: '07/23/1990',
    lastVisit: 'Sep 6, 2026',
    flags: [],
  },
  {
    name: 'David Kim',
    mrn: 'MRN 01345',
    dob: '05/18/1982',
    lastVisit: 'Aug 30, 2026',
    flags: [{ tone: 'error', label: 'Penicillin allergy' }],
  },
  {
    name: 'Linda Torres',
    mrn: 'MRN 01789',
    dob: '09/09/1965',
    lastVisit: 'Aug 28, 2026',
    flags: [],
  },
  {
    name: 'Robert Ellis',
    mrn: 'MRN 02011',
    dob: '01/30/1970',
    lastVisit: 'Aug 21, 2026',
    flags: [{ tone: 'warning', label: 'Diabetes' }],
  },
]

export default function Patients() {
  return (
    <AppShell
      navItems={clinicianNavItems}
      roleLabel="Clinician"
      userName="Dr. Priya Nair"
      pageTitle="Patients"
    >
      <div className="flex flex-col gap-6">
        <SearchInput placeholder="Search patients by name or MRN" className="max-w-sm" />

        <Card className="overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="px-4 py-2.5 text-label text-muted">Patient</th>
                  <th className="hidden px-4 py-2.5 text-label text-muted sm:table-cell">
                    Date of birth
                  </th>
                  <th className="hidden px-4 py-2.5 text-label text-muted wide:table-cell">
                    Last visit
                  </th>
                  <th className="px-4 py-2.5 text-label text-muted">Flags</th>
                  <th className="px-4 py-2.5 text-label text-muted" />
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {patients.map((p) => (
                  <tr key={p.mrn} className="text-data text-text">
                    <td className="whitespace-nowrap px-4 py-3">
                      <p className="font-medium">{p.name}</p>
                      <p className="text-supporting text-muted">{p.mrn}</p>
                    </td>
                    <td className="hidden whitespace-nowrap px-4 py-3 text-muted sm:table-cell">
                      {p.dob}
                    </td>
                    <td className="hidden whitespace-nowrap px-4 py-3 text-muted wide:table-cell">
                      {p.lastVisit}
                    </td>
                    <td className="px-4 py-3">
                      {p.flags.length === 0 ? (
                        <span className="text-muted">—</span>
                      ) : (
                        <div className="flex flex-wrap gap-1.5">
                          {p.flags.map((flag) => (
                            <StatusBadge key={flag.label} tone={flag.tone}>
                              {flag.label}
                            </StatusBadge>
                          ))}
                        </div>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-right">
                      <Button variant="secondary" size="sm">
                        Open chart
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

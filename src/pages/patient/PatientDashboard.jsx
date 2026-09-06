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
      <div className="flex flex-col gap-7">
        <section className="rounded-2xl bg-primary px-6 py-7 text-white shadow-[0_12px_30px_rgba(23,107,104,0.14)] md:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-label text-white/70">Good morning, Jordan</p>
              <h2 className="mt-2 text-[1.75rem] font-semibold leading-tight tracking-tight">Your care, at a glance.</h2>
              <p className="mt-2 text-body text-white/75">You have one action to complete before your upcoming visit.</p>
            </div>
            <Link to="/patient/records" className="shrink-0">
              <Button variant="secondary" size="sm">View health record</Button>
            </Link>
          </div>
        </section>

        <section className="grid gap-4 xl:grid-cols-[minmax(0,1.5fr)_minmax(260px,.8fr)]">
          <Card className="relative overflow-hidden border-0 bg-[#e7f3f1] p-6">
            <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full border-[18px] border-white/35" />
            <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-success" /><p className="text-label text-primary">Next appointment</p></div>
                <h2 className="mt-2 text-h2 text-text">Dr. Maria Alvarez</h2>
                <p className="mt-1 text-body text-muted">Primary Care · Tuesday, Sep 9 · 10:30 AM</p>
                <p className="mt-3 inline-flex items-center gap-2 rounded-lg bg-white/70 px-2.5 py-1.5 text-label text-text">◉ Video visit · 25 min</p>
              </div>
              <div className="relative flex gap-3">
                <Link to="/patient/appointments"><Button variant="secondary">Details</Button></Link>
                <Link to="/patient/appointments"><Button>Join visit</Button></Link>
              </div>
            </div>
          </Card>
          <Card className="flex flex-col justify-between bg-surface p-5">
            <div className="flex items-start justify-between"><div><p className="text-label text-muted">Care plan</p><h3 className="mt-1 text-h3 text-text">Stay on track</h3></div><span className="rounded-full bg-success-subtle px-2.5 py-1 text-label text-success">On track</span></div>
            <div className="mt-5"><div className="flex justify-between text-label text-muted"><span>Annual wellness goals</span><span className="text-text">3 of 4</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-background"><div className="h-full w-3/4 rounded-full bg-primary" /></div></div>
          </Card>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <div><p className="text-label text-muted">Your to-do list</p><h3 className="mt-1 text-h3 text-text">Needs your attention</h3></div>
            <span className="rounded-full bg-warning-subtle px-2.5 py-1 text-label text-warning">1 action due</span>
          </div>
          <div className="flex flex-col gap-3">
            {actionItems.map((item) => (
              <Link key={item.id} to={item.to}>
                <Card className="flex items-center justify-between gap-4 p-4 transition hover:-translate-y-px hover:border-border-strong hover:shadow-sm">
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

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
          <div>
          <div className="mb-4"><p className="text-label text-muted">Shortcuts</p><h3 className="mt-1 text-h3 text-text">Quick actions</h3></div>
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
          </div>
          <Card className="bg-[#173f3d] text-white">
            <p className="text-label text-white/60">Latest result</p>
            <div className="mt-3 flex items-start justify-between gap-3"><div><h3 className="text-h3">Basic metabolic panel</h3><p className="mt-1 text-supporting text-white/65">Reviewed Sep 2 by Dr. Alvarez</p></div><span className="rounded-full bg-white/10 px-2.5 py-1 text-label text-[#a9e4d9]">Normal</span></div>
            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-4"><div><p className="text-label text-white/55">Glucose</p><p className="mt-1 text-body font-medium">92</p></div><div><p className="text-label text-white/55">Sodium</p><p className="mt-1 text-body font-medium">140</p></div><div><p className="text-label text-white/55">Potassium</p><p className="mt-1 text-body font-medium">4.1</p></div></div>
            <Link to="/patient/records" className="mt-5 inline-block text-label text-[#a9e4d9] hover:text-white">View full result →</Link>
          </Card>
        </section>
      </div>
    </AppShell>
  )
}

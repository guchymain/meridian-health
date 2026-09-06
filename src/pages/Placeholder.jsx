import { Link } from 'react-router-dom'
import Logo from '../components/Brand.jsx'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import AppShell from '../layouts/AppShell.jsx'

function EmptyState({ title, dashboardPath = '/' }) {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <Card className="w-full max-w-lg text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary">
          <span className="text-h3 text-primary">+</span>
        </div>
        <h2 className="mt-5 text-h2 text-text">{title} is coming next</h2>
        <p className="mx-auto mt-3 max-w-reading text-body text-muted">
          This workspace is ready for your next care workflow. Return to your overview to continue
          managing care without losing your place.
        </p>
        <Link to={dashboardPath} className="mt-6 inline-flex">
          <Button>Back to overview</Button>
        </Link>
      </Card>
    </div>
  )
}

export default function Placeholder({ title, navItems, roleLabel, userName, dashboardPath }) {
  if (!navItems) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
        <Logo size={40} />
        <h1 className="mt-5 text-h2 text-text">{title}</h1>
        <p className="mt-2 text-body text-muted">We couldn't find that page.</p>
        <Link to="/" className="mt-6">
          <Button>Return home</Button>
        </Link>
      </div>
    )
  }

  return (
    <AppShell
      navItems={navItems}
      roleLabel={roleLabel}
      userName={userName}
      pageTitle={title}
    >
      <EmptyState title={title} dashboardPath={dashboardPath} />
    </AppShell>
  )
}

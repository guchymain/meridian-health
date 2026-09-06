import Button from '../../components/ui/Button.jsx'
import Card from '../../components/ui/Card.jsx'
import AppShell from '../../layouts/AppShell.jsx'
import { clinicianNavItems } from './nav.jsx'

function InboxSection({ title, count, children }) {
  return (
    <Card className="p-0">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="text-h4 text-text">{title}</h3>
        <span className="text-supporting text-muted">{count}</span>
      </div>
      <div className="flex flex-col divide-y divide-border">{children}</div>
    </Card>
  )
}

function InboxRow({ title, detail, time, action }) {
  return (
    <div className="flex items-center justify-between gap-4 p-4">
      <div className="min-w-0">
        <p className="truncate text-body text-text">{title}</p>
        <p className="truncate text-supporting text-muted">{detail}</p>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <span className="hidden text-supporting text-muted sm:inline">{time}</span>
        {action}
      </div>
    </div>
  )
}

export default function Inbox() {
  return (
    <AppShell
      navItems={clinicianNavItems}
      roleLabel="Clinician"
      userName="Dr. Priya Nair"
      pageTitle="Inbox"
    >
      <div className="flex flex-col gap-6">
        <InboxSection title="Results to review" count="4">
          <InboxRow
            title="Sarah Chen"
            detail="Basic metabolic panel"
            time="Sep 5"
            action={
              <Button variant="secondary" size="sm">
                Review
              </Button>
            }
          />
          <InboxRow
            title="James Okafor"
            detail="Lipid panel"
            time="Sep 4"
            action={
              <Button variant="secondary" size="sm">
                Review
              </Button>
            }
          />
          <InboxRow
            title="Maria Gonzalez"
            detail="Rapid strep test"
            time="Sep 6"
            action={
              <Button variant="secondary" size="sm">
                Review
              </Button>
            }
          />
          <InboxRow
            title="Linda Torres"
            detail="A1C"
            time="Sep 3"
            action={
              <Button variant="secondary" size="sm">
                Review
              </Button>
            }
          />
        </InboxSection>

        <InboxSection title="Refill requests" count="2">
          <InboxRow
            title="David Kim"
            detail="Lisinopril 10mg — requested Sep 5"
            time="Sep 5"
            action={
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  Deny
                </Button>
                <Button size="sm">Approve</Button>
              </div>
            }
          />
          <InboxRow
            title="Robert Ellis"
            detail="Metformin 500mg — requested Sep 6"
            time="Sep 6"
            action={
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  Deny
                </Button>
                <Button size="sm">Approve</Button>
              </div>
            }
          />
        </InboxSection>

        <InboxSection title="Patient messages" count="5">
          <InboxRow
            title="Sarah Chen"
            detail="Question about medication timing"
            time="Sep 5"
            action={
              <Button variant="secondary" size="sm">
                Reply
              </Button>
            }
          />
          <InboxRow
            title="James Okafor"
            detail="Can I reschedule Tuesday's visit?"
            time="Sep 5"
            action={
              <Button variant="secondary" size="sm">
                Reply
              </Button>
            }
          />
          <InboxRow
            title="Linda Torres"
            detail="Side effects from new prescription"
            time="Sep 4"
            action={
              <Button variant="secondary" size="sm">
                Reply
              </Button>
            }
          />
          <InboxRow
            title="Maria Gonzalez"
            detail="Follow-up on throat culture"
            time="Sep 6"
            action={
              <Button variant="secondary" size="sm">
                Reply
              </Button>
            }
          />
          <InboxRow
            title="Robert Ellis"
            detail="Question about diet plan"
            time="Sep 3"
            action={
              <Button variant="secondary" size="sm">
                Reply
              </Button>
            }
          />
        </InboxSection>

        <InboxSection title="Notes awaiting signature" count="1">
          <InboxRow
            title="Maria Gonzalez"
            detail="Sore throat visit note — Sep 6"
            time="Sep 6"
            action={<Button size="sm">Sign</Button>}
          />
        </InboxSection>
      </div>
    </AppShell>
  )
}

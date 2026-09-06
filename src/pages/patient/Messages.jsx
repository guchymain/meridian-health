import { useState } from 'react'
import Button from '../../components/ui/Button.jsx'
import Card from '../../components/ui/Card.jsx'
import Input from '../../components/ui/Input.jsx'
import AppShell from '../../layouts/AppShell.jsx'
import { patientNavItems } from './nav.jsx'

const threads = [
  {
    id: 1,
    from: 'Dr. Maria Alvarez',
    subject: 'Re: your recent lab results',
    time: '9:14 AM',
    unread: true,
    messages: [
      {
        fromMe: false,
        text: 'Your basic metabolic panel looks normal. No action needed.',
        time: '9:14 AM',
      },
      { fromMe: true, text: 'Thank you! Should I still come in Tuesday?', time: '9:20 AM' },
      {
        fromMe: false,
        text: "Yes, let's keep the Tuesday visit for your annual physical.",
        time: '9:25 AM',
      },
    ],
  },
  {
    id: 2,
    from: 'Care Team',
    subject: 'Appointment reminder',
    time: 'Yesterday',
    unread: false,
    messages: [
      {
        fromMe: false,
        text: 'This is a reminder of your video visit on Tue, Sep 9 at 10:30 AM.',
        time: 'Yesterday',
      },
    ],
  },
  {
    id: 3,
    from: 'Billing Support',
    subject: 'Your statement is ready',
    time: 'Sep 2',
    unread: false,
    messages: [
      {
        fromMe: false,
        text: 'A new statement is available in your billing section.',
        time: 'Sep 2',
      },
    ],
  },
]

export default function Messages() {
  const [activeId, setActiveId] = useState(threads[0].id)
  const active = threads.find((t) => t.id === activeId)

  return (
    <AppShell
      navItems={patientNavItems}
      roleLabel="Patient"
      userName="Jordan Ellis"
      pageTitle="Messages"
    >
      <Card className="grid gap-0 overflow-hidden p-0 md:grid-cols-[280px_minmax(0,1fr)]">
        <div className="border-b border-border md:border-b-0 md:border-r">
          <div className="flex flex-col divide-y divide-border">
            {threads.map((thread) => (
              <button
                key={thread.id}
                type="button"
                onClick={() => setActiveId(thread.id)}
                className={`flex flex-col gap-1 px-4 py-3 text-left ${
                  thread.id === activeId ? 'bg-info-subtle' : 'hover:bg-background'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-body text-text">{thread.from}</span>
                  {thread.unread && <span className="h-2 w-2 rounded-full bg-primary" />}
                </div>
                <span className="truncate text-supporting text-muted">{thread.subject}</span>
                <span className="text-supporting text-muted">{thread.time}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="border-b border-border p-4">
            <p className="text-body text-text">{active.from}</p>
            <p className="text-supporting text-muted">{active.subject}</p>
          </div>

          <div className="flex flex-1 flex-col gap-3 p-4">
            {active.messages.map((message, i) => (
              <div key={i} className={`flex ${message.fromMe ? 'justify-end' : ''}`}>
                <div
                  className={`max-w-sm rounded-lg p-3 ${
                    message.fromMe
                      ? 'rounded-tr-none bg-info-subtle'
                      : 'rounded-tl-none bg-background'
                  }`}
                >
                  <p className="text-data text-text">{message.text}</p>
                  <p className="mt-1 text-supporting text-muted">{message.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 border-t border-border p-4">
            <Input placeholder="Type a message…" className="flex-1" />
            <Button>Send</Button>
          </div>
        </div>
      </Card>
    </AppShell>
  )
}

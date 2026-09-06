import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrandMark } from '../../components/Brand.jsx'
import Button from '../../components/ui/Button.jsx'
import Card from '../../components/ui/Card.jsx'
import Field from '../../components/ui/Field.jsx'
import Input from '../../components/ui/Input.jsx'

const DEMO_ROLES = [
  { label: 'Patient', to: '/patient' },
  { label: 'Clinician', to: '/clinician' },
  { label: 'Front desk', to: '/staff' },
  { label: 'Admin', to: '/admin' },
]

export default function SignIn() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    navigate('/patient')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-2 text-center">
          <BrandMark size={40} />
          <h1 className="text-h2 text-text">Northwell Care</h1>
          <p className="text-body text-muted">Sign in to continue to your account</p>
        </div>

        <Card>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <Field label="Email" htmlFor="email">
              <Input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </Field>

            <Field label="Password" htmlFor="password">
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </Field>

            <div className="flex items-center justify-between text-supporting">
              <label className="flex items-center gap-2 text-muted">
                <input type="checkbox" className="h-4 w-4 rounded border-border-strong accent-primary" />
                Stay signed in
              </label>
              <a href="#" className="text-primary hover:underline">
                Forgot password?
              </a>
            </div>

            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </form>
        </Card>

        <p className="mt-6 text-center text-supporting text-muted">
          Protected health information. Access is logged and monitored.
        </p>

        <div className="mt-8 border-t border-border pt-6">
          <p className="text-center text-supporting text-muted">
            Prototype — no real accounts yet. Preview a role:
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {DEMO_ROLES.map((role) => (
              <Button
                key={role.to}
                variant="secondary"
                size="sm"
                onClick={() => navigate(role.to)}
              >
                {role.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

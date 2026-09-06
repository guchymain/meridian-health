import { useState } from 'react'
import Button from '../../components/ui/Button.jsx'
import Input from '../../components/ui/Input.jsx'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="mx-auto max-w-reading text-center">
      <h2 className="text-h2 text-text">Stay informed</h2>
      <p className="mt-3 text-body-lg text-muted">
        Occasional updates on new features and plain-language health guidance — no spam.
      </p>

      {submitted ? (
        <p className="mt-6 text-body text-success">You're subscribed. Thanks for joining us.</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <Input
            type="email"
            required
            placeholder="you@example.com"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      )}

      <p className="mt-3 text-supporting text-muted">
        We never share your email. Unsubscribe anytime.
      </p>
    </div>
  )
}

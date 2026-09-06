import { Link } from 'react-router-dom'
import Logo, { BRAND_NAME } from '../components/Brand.jsx'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import { Icon, icons } from './home/icons.jsx'
import NewsCard from './home/NewsCard.jsx'
import NewsletterForm from './home/NewsletterForm.jsx'
import { DashboardPreview, MessagesPreview, RecordsPreview } from './home/previews.jsx'

function Nav() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 md:px-8">
        <Logo size={32} />
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#for-patients" className="text-body text-muted hover:text-text">
            For patients
          </a>
          <a href="#for-providers" className="text-body text-muted hover:text-text">
            For providers
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/sign-in" className="text-body text-text hover:underline">
            Log in
          </Link>
          <Link to="/sign-in">
            <Button size="sm">Get started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

function FeatureRow({ eyebrow, title, description, preview, reverse }) {
  return (
    <div
      className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
    >
      <div>
        <p className="text-label text-primary">{eyebrow}</p>
        <h3 className="mt-2 text-h2 text-text">{title}</h3>
        <p className="mt-3 text-body-lg text-muted">{description}</p>
      </div>
      <div className="mx-auto w-full max-w-sm">{preview}</div>
    </div>
  )
}

function IconCard({ icon, title, description }) {
  return (
    <Card className="flex flex-col gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-info-subtle text-primary">
        <Icon d={icon} className="h-5 w-5" />
      </div>
      <h4 className="text-h4 text-text">{title}</h4>
      <p className="text-body text-muted">{description}</p>
    </Card>
  )
}

export default function Home() {
  return (
    <div className="bg-background">
      <Nav />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="text-h1 text-text md:text-[2.5rem] md:leading-[1.15]">
                Modern care, connected in one place.
              </h1>
              <p className="mt-4 text-body-lg text-muted">
                Book visits, message your care team, and manage your health record — one secure
                platform for patients, providers, and care teams.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/sign-in">
                  <Button size="lg">Get started</Button>
                </Link>
                <a href="#for-patients">
                  <Button variant="secondary" size="lg">
                    See how it works
                  </Button>
                </a>
              </div>
            </div>
            <DashboardPreview />
          </div>
        </section>

        {/* Feature pairs */}
        <section id="for-patients" className="border-t border-border bg-surface">
          <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-24">
            <div className="flex flex-col gap-20">
              <FeatureRow
                eyebrow="Appointments"
                title="Book and manage visits in a few taps"
                description="Find a provider, pick a time, and complete pre-visit intake before you arrive — for in-person or video visits."
                preview={<DashboardPreview />}
              />
              <FeatureRow
                eyebrow="Messaging"
                title="Message your care team securely"
                description="Ask a question and get a response tied directly to your chart, with your provider having full context."
                preview={<MessagesPreview />}
                reverse
              />
              <FeatureRow
                eyebrow="Health record"
                title="See your whole health record in one place"
                description="Medications, allergies, conditions, and results — with plain-language context, not just raw data."
                preview={<RecordsPreview />}
              />
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto max-w-reading text-center">
              <h2 className="text-h2 text-text">Why choose {BRAND_NAME}</h2>
              <p className="mt-3 text-body-lg text-muted">
                Built around the things that actually make care feel reliable.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <IconCard
                icon={icons.verified}
                title="Verified providers"
                description="Every clinician's license and credentials are verified before they see a patient."
              />
              <IconCard
                icon={icons.tag}
                title="Transparent pricing"
                description="See the cost of a visit before you book — no surprise bills after the fact."
              />
              <IconCard
                icon={icons.link}
                title="One connected record"
                description="Every visit, result, and message lives in a single record your whole care team can see."
              />
              <IconCard
                icon={icons.lock}
                title="Security by design"
                description="Role-based access and full audit trails protect your health information at every step."
              />
              <IconCard
                icon={icons.video}
                title="Reliable video visits"
                description="Built to hold up on a weak connection, with chat as an automatic fallback."
              />
              <IconCard
                icon={icons.headset}
                title="Real human support"
                description="A support team is available when something needs a person, not just a form."
              />
            </div>
          </div>
        </section>

        {/* Audience section */}
        <section id="for-providers" className="border-t border-border bg-surface">
          <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto max-w-reading text-center">
              <h2 className="text-h2 text-text">Built for every part of a care team</h2>
              <p className="mt-3 text-body-lg text-muted">
                One platform, four connected experiences — each built for how that person actually
                works.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <IconCard
                icon={icons.patient}
                title="For patients"
                description="Book care, message your team, and manage billing without the runaround."
              />
              <IconCard
                icon={icons.provider}
                title="For providers"
                description="Chart efficiently with templated encounters and a clear daily queue."
              />
              <IconCard
                icon={icons.org}
                title="For organizations"
                description="Manage staff, scheduling, and compliance across every location."
              />
            </div>
          </div>
        </section>

        {/* Trust / compliance */}
        <section className="border-t border-border bg-background">
          <div className="mx-auto flex max-w-content flex-col items-start gap-4 px-4 py-14 md:flex-row md:items-center md:gap-6 md:px-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-info-subtle text-info">
              <Icon d={icons.shield} className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-h3 text-text">Built with privacy and security in mind</h3>
              <p className="mt-1 text-body text-muted">
                Role-based access, full audit trails, and encrypted messaging protect health
                information at every step — access to your record is always logged.
              </p>
            </div>
          </div>
        </section>

        {/* News & Insights */}
        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-24">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-h2 text-text">News &amp; insights</h2>
                <p className="mt-2 text-body-lg text-muted">
                  Plain-language guidance on getting the most out of your care.
                </p>
              </div>
              <a href="#" className="text-body text-primary hover:underline">
                View all articles →
              </a>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <NewsCard
                category="Health literacy"
                title="How to actually read your lab results"
                excerpt="A plain-language guide to the numbers, ranges, and flags on a standard panel."
                date="Aug 28, 2026"
              />
              <NewsCard
                category="Privacy"
                title="What HIPAA actually protects — and what it doesn't"
                excerpt="A short guide to your rights over your own health information."
                date="Aug 14, 2026"
              />
              <NewsCard
                category="Telehealth"
                title="Video visit or in-person? A simple way to decide"
                excerpt="When a virtual visit works just as well, and when it's worth going in."
                date="Jul 30, 2026"
              />
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="border-t border-border bg-background">
          <div className="px-4 py-16 md:px-8 md:py-20">
            <NewsletterForm />
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-content px-4 py-16 text-center md:px-8 md:py-20">
            <h2 className="text-h2 text-text">Ready to get started?</h2>
            <p className="mx-auto mt-3 max-w-reading text-body-lg text-muted">
              Create an account to book your first visit, or sign in if your care team already has
              you set up.
            </p>
            <div className="mt-8">
              <Link to="/sign-in">
                <Button size="lg">Get started</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto max-w-content px-4 py-12 md:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div>
              <Logo />
              <p className="mt-3 max-w-xs text-supporting text-muted">
                A connected platform for patients, providers, and care organizations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <p className="text-label text-text">Product</p>
                <ul className="mt-3 flex flex-col gap-2 text-body text-muted">
                  <li>
                    <a href="#for-patients" className="hover:text-text">
                      For patients
                    </a>
                  </li>
                  <li>
                    <a href="#for-providers" className="hover:text-text">
                      For providers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-label text-text">Company</p>
                <ul className="mt-3 flex flex-col gap-2 text-body text-muted">
                  <li>
                    <a href="#" className="hover:text-text">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-text">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-label text-text">Legal</p>
                <ul className="mt-3 flex flex-col gap-2 text-body text-muted">
                  <li>
                    <a href="#" className="hover:text-text">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-text">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-10 border-t border-border pt-6 text-supporting text-muted">
            © 2026 {BRAND_NAME}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

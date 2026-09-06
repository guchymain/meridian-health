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
    <header className="border-b border-border/80 bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-content items-center justify-between px-4 md:px-8">
        <Logo size={34} textClassName="hidden text-h4 text-text sm:inline" />
        <nav className="hidden items-center gap-8 lg:flex">
          <a href="#for-patients" className="text-body text-muted hover:text-text">
            For patients
          </a>
          <a href="#for-providers" className="text-body text-muted hover:text-text">
            For providers
          </a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/sign-in" className="whitespace-nowrap px-2 text-body text-text hover:underline">
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
        <section className="mx-auto max-w-content px-4 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#123f3d] px-6 py-10 text-white shadow-[0_24px_60px_rgba(18,63,61,0.18)] md:px-12 md:py-16">
            <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full border-[36px] border-white/5" />
            <div className="absolute -bottom-36 right-20 h-64 w-64 rounded-full border-[22px] border-[#8ed6c8]/10" />
            <div className="relative grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_360px] md:gap-16">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-label text-[#b9e9df]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8ed6c8]" />
                  Care that fits your life
                </div>
                <h1 className="mt-5 text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.035em] md:text-[3.75rem]">
                  Your health, in good hands.
                </h1>
                <p className="mt-5 max-w-xl text-body-lg text-white/75 md:text-[1.15rem]">
                  Book visits, message your care team, and understand your health record — all in
                  one secure, connected place.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/sign-in">
                    <Button size="lg" className="bg-[#a9e4d9] text-[#123f3d] shadow-none hover:bg-white">
                      Get started
                    </Button>
                  </Link>
                  <a href="#for-patients">
                    <Button variant="ghost" size="lg" className="border border-white/20 text-white hover:bg-white/10">
                      Explore the platform
                    </Button>
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-supporting text-white/60">
                  <span>✓ Verified providers</span>
                  <span>✓ Transparent pricing</span>
                  <span>✓ Secure by design</span>
                </div>
              </div>
              <div className="relative">
                <DashboardPreview />
                <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-white/10 bg-white px-3 py-2 text-text shadow-xl sm:flex">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-success-subtle text-success">✓</span>
                  <span><strong className="block text-data">Care team connected</strong><small className="text-supporting text-muted">Your record is up to date</small></span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 border-b border-border px-1 py-8 sm:grid-cols-3 md:px-6">
            <div><p className="text-[1.65rem] font-semibold tracking-tight text-text">24/7</p><p className="text-supporting text-muted">Access to your care team</p></div>
            <div><p className="text-[1.65rem] font-semibold tracking-tight text-text">1 place</p><p className="text-supporting text-muted">For visits, records, and billing</p></div>
            <div><p className="text-[1.65rem] font-semibold tracking-tight text-text">100%</p><p className="text-supporting text-muted">Private and secure by design</p></div>
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
        <section id="security" className="border-t border-border bg-background">
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
        <section id="insights" className="border-t border-border bg-surface">
          <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-24">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-h2 text-text">News &amp; insights</h2>
                <p className="mt-2 text-body-lg text-muted">
                  Plain-language guidance on getting the most out of your care.
                </p>
              </div>
              <a href="#insights" className="text-body text-primary hover:underline">
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
                    <a href="#for-patients" className="hover:text-text">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@northwellcare.example" className="hover:text-text">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-label text-text">Legal</p>
                <ul className="mt-3 flex flex-col gap-2 text-body text-muted">
                  <li>
                    <a href="#security" className="hover:text-text">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#security" className="hover:text-text">
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

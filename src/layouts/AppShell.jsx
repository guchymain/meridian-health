import { NavLink } from 'react-router-dom'
import Logo from '../components/Brand.jsx'

export default function AppShell({ navItems, roleLabel, userName, pageTitle, children }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-surface md:flex">
          <div className="flex h-[76px] items-center border-b border-border px-5">
            <Logo size={28} />
          </div>

          <nav className="flex flex-1 flex-col gap-1 p-3 pt-5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-body transition-colors ${
                    isActive
                      ? 'bg-secondary text-primary font-medium'
                      : 'text-muted hover:bg-background hover:text-text'
                  }`
                }
              >
                <span className="h-5 w-5 shrink-0" aria-hidden="true">
                  {item.icon}
                </span>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="border-t border-border p-3">
            <div className="flex items-center gap-3 rounded-lg px-3 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-label text-muted">
                {userName.slice(0, 1)}
              </div>
              <div className="min-w-0">
                <p className="truncate text-data text-text">{userName}</p>
                <p className="truncate text-supporting text-muted">{roleLabel}</p>
              </div>
            </div>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="flex h-[76px] items-center justify-between border-b border-border/80 bg-surface/90 px-4 backdrop-blur md:px-8">
            <div className="flex items-center gap-3">
              <div className="md:hidden"><Logo size={30} textClassName="hidden" /></div>
              <div>
                <p className="hidden text-label text-muted md:block">Care workspace</p>
                <h1 className="text-h3 text-text">{pageTitle}</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden rounded-full bg-secondary px-3 py-1.5 text-label text-primary sm:block">Secure portal</span>
              <button
                type="button"
                aria-label="Notifications"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl text-muted hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.73 21a2 2 0 01-3.46 0"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
                <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-error" />
              </button>
            </div>
          </header>

          <main className="flex-1 px-4 py-8 md:px-8">
            <div className="mx-auto max-w-content">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}

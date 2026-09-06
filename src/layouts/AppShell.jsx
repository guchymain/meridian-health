import { NavLink } from 'react-router-dom'

export default function AppShell({ navItems, roleLabel, userName, pageTitle, children }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <aside className="hidden w-60 shrink-0 flex-col border-r border-border bg-surface md:flex">
          <div className="flex h-16 items-center gap-2 border-b border-border px-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 3v18M3 12h18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-h4 text-text">Meridian Health</span>
          </div>

          <nav className="flex flex-1 flex-col gap-1 p-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 text-body ${
                    isActive
                      ? 'bg-info-subtle text-primary font-medium'
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
          <header className="flex h-16 items-center justify-between border-b border-border bg-surface px-4 md:px-8">
            <h1 className="text-h3 text-text">{pageTitle}</h1>
            <button
              type="button"
              aria-label="Notifications"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
            </button>
          </header>

          <main className="flex-1 px-4 py-8 md:px-8">
            <div className="mx-auto max-w-content">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}

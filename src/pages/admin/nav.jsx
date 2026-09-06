function Icon({ d }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d={d} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const adminNavItems = [
  { to: '/admin', end: true, label: 'Overview', icon: <Icon d="M3 11l9-7 9 7M5 10v10h14V10" /> },
  {
    to: '/admin/organization',
    label: 'Organization',
    icon: <Icon d="M4 21V7l8-4 8 4v14M9 21v-6h6v6M4 21h16" />,
  },
  {
    to: '/admin/users',
    label: 'Users',
    icon: <Icon d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />,
  },
  {
    to: '/admin/audit-log',
    label: 'Audit log',
    icon: <Icon d="M8 3h8l4 4v14H4V3h4zM8 3v4H4M8 12h8M8 16h8" />,
  },
  {
    to: '/admin/settings',
    label: 'Settings',
    icon: <Icon d="M12 15a3 3 0 100-6 3 3 0 000 6zM19 12a7 7 0 00-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 00-2-1.2L14 3h-4l-.5 2.6a7 7 0 00-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 005 12a7 7 0 00.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 002 1.2L10 21h4l.5-2.6a7 7 0 002-1.2l2.4 1 2-3.4-2-1.6c.07-.4.1-.8.1-1.2z" />,
  },
]

function Icon({ d }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d={d} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const staffNavItems = [
  {
    to: '/staff',
    end: true,
    label: 'Today',
    icon: <Icon d="M4 5h16v16H4V5zM4 9h16M8 3v4M16 3v4" />,
  },
  {
    to: '/staff/check-in',
    label: 'Check-in',
    icon: <Icon d="M9 12l2 2 4-4M12 3l7 4v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V7l7-4z" />,
  },
  {
    to: '/staff/billing',
    label: 'Billing',
    icon: <Icon d="M3 7h18v10H3V7zM3 10h18" />,
  },
]

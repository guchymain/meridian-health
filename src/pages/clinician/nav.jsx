function Icon({ d }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d={d} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const clinicianNavItems = [
  {
    to: '/clinician',
    end: true,
    label: 'Today',
    icon: <Icon d="M4 5h16v16H4V5zM4 9h16M8 3v4M16 3v4" />,
  },
  {
    to: '/clinician/patients',
    label: 'Patients',
    icon: <Icon d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35" />,
  },
  {
    to: '/clinician/inbox',
    label: 'Inbox',
    icon: <Icon d="M4 6h16v12H4V6zM4 6l8 7 8-7" />,
  },
  {
    to: '/clinician/orders',
    label: 'Orders',
    icon: <Icon d="M9 3h6v4H9V3zM6 7h12v14H6V7zM9 12h6M9 16h6" />,
  },
]

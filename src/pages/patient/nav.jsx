function Icon({ d }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d={d} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const patientNavItems = [
  { to: '/patient', end: true, label: 'Home', icon: <Icon d="M3 11l9-7 9 7M5 10v10h14V10" /> },
  {
    to: '/patient/appointments',
    label: 'Appointments',
    icon: <Icon d="M4 5h16v16H4V5zM4 9h16M8 3v4M16 3v4" />,
  },
  {
    to: '/patient/messages',
    label: 'Messages',
    icon: <Icon d="M4 5h16v12H8l-4 4V5z" />,
  },
  {
    to: '/patient/records',
    label: 'Health record',
    icon: <Icon d="M6 3h9l5 5v13H6V3zM14 3v6h6" />,
  },
  {
    to: '/patient/billing',
    label: 'Billing',
    icon: <Icon d="M3 7h18v10H3V7zM3 10h18" />,
  },
]

export function Icon({ d, className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d={d} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const icons = {
  patient: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4.4 3.6-8 8-8s8 3.6 8 8',
  provider: 'M9 3v4a2 2 0 01-2 2H3M21 9V6a3 3 0 00-3-3h-4M3 15v3a3 3 0 003 3h4M15 21h3a3 3 0 003-3v-3M9 12h6M12 9v6',
  org: 'M4 21V7l8-4 8 4v14M9 21v-6h6v6M4 21h16',
  shield: 'M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z',
}

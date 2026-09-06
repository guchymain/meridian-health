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
  verified: 'M9 12l2 2 4-4M12 3l7 4v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V7l7-4z',
  tag: 'M3 12V5a2 2 0 012-2h7l9 9-9 9-9-9zM8 7h.01',
  link: 'M9.5 14.5l5-5M9 9.5L7 11.5a3 3 0 004.24 4.24l2-2M15 14.5l2-2a3 3 0 00-4.24-4.24l-2 2',
  lock: 'M6 11V7a6 6 0 1112 0v4M5 11h14v10H5V11z',
  video: 'M15 10l6-3v10l-6-3M3 6h12v12H3V6z',
  headset: 'M4 13a8 8 0 0116 0v4a2 2 0 01-2 2h-1v-6h2M4 17a2 2 0 002 2h1v-6H5a1 1 0 00-1 1v3z',
}

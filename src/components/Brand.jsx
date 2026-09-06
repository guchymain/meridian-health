import { Link } from 'react-router-dom'

export const BRAND_NAME = 'Northwell Care'

// Abstract mark: two overlapping rings — connection between patient and care team.
// Single flat color (white stroke on the primary badge), no gradient.
export function BrandMark({ size = 32, className = '' }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-lg bg-primary text-white ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size * 0.56} height={size * 0.56} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="12" r="6" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="15" cy="12" r="6" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    </div>
  )
}

export default function Logo({ size = 32, textClassName = 'text-h4 text-text', to = '/', className = '' }) {
  const content = (
    <div className={`flex items-center gap-2 ${className}`}>
      <BrandMark size={size} />
      <span className={textClassName}>{BRAND_NAME}</span>
    </div>
  )

  return to ? (
    <Link to={to} className="flex items-center">
      {content}
    </Link>
  ) : (
    content
  )
}

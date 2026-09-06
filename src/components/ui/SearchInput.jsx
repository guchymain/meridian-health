import Input from './Input.jsx'

export default function SearchInput({ className = '', ...props }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
        aria-hidden="true"
      >
        <path
          d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <Input className="pl-9" {...props} />
    </div>
  )
}

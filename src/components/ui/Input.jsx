export default function Input({ className = '', invalid = false, ...props }) {
  return (
    <input
      className={`h-10 rounded-lg border bg-surface px-3 text-body text-text placeholder:text-muted
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
        ${invalid ? 'border-error' : 'border-border-strong'} ${className}`}
      {...props}
    />
  )
}

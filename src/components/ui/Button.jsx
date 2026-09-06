const VARIANTS = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  secondary: 'bg-surface text-text border border-border-strong hover:bg-background',
  ghost: 'text-text hover:bg-background',
  danger: 'bg-error text-white hover:opacity-90',
}

const SIZES = {
  sm: 'h-8 px-3 text-data',
  md: 'h-10 px-4 text-body',
  lg: 'h-12 px-6 text-body',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
        disabled:opacity-50 disabled:pointer-events-none
        ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

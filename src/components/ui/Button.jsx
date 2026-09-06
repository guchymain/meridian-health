const VARIANTS = {
  primary: 'bg-primary text-white shadow-[0_4px_10px_rgba(23,107,104,0.18)] hover:bg-primary-hover',
  secondary: 'bg-secondary text-primary border border-transparent hover:bg-secondary-hover',
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
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
        disabled:opacity-50 disabled:pointer-events-none
        ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

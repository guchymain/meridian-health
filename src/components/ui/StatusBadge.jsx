// Status is never color-only: every tone pairs a dot with a text label.
const TONES = {
  success: 'bg-success-subtle text-success',
  warning: 'bg-warning-subtle text-warning',
  error: 'bg-error-subtle text-error',
  info: 'bg-info-subtle text-info',
  neutral: 'bg-background text-muted',
}

const DOT_TONES = {
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
  info: 'bg-info',
  neutral: 'bg-muted',
}

const SIGNS = {
  success: '✓',
  warning: '!',
  error: '!',
  info: 'i',
  neutral: '•',
}

export default function StatusBadge({ tone = 'neutral', children }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border border-black/5 px-2 py-1 text-label font-medium ${TONES[tone]}`}
    >
      <span
        className={`flex h-3.5 w-3.5 items-center justify-center rounded-sm text-[10px] font-bold leading-none text-white ${DOT_TONES[tone]}`}
        aria-hidden="true"
      >
        {SIGNS[tone]}
      </span>
      {children}
    </span>
  )
}

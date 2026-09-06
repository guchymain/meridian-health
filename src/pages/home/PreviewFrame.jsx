// A lightweight stand-in for a product screenshot: real UI tokens, no image asset needed.
export default function PreviewFrame({ children, className = '' }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-border bg-surface ${className}`}
    >
      <div className="flex items-center justify-between border-b border-border bg-[#f8faf9] px-3 py-1.5">
        <span className="text-[10px] font-medium text-muted">Care workspace</span>
        <div className="flex items-center gap-1" aria-label="Window controls">
          <button type="button" aria-label="Minimize window" className="flex h-5 w-6 items-center justify-center rounded-sm text-[13px] leading-none text-[#4b5563] hover:bg-[#e5e7eb]">
            <span aria-hidden="true">−</span>
          </button>
          <button type="button" aria-label="Maximize window" className="flex h-5 w-6 items-center justify-center rounded-sm text-[10px] leading-none text-[#4b5563] hover:bg-[#e5e7eb]">
            <span aria-hidden="true">□</span>
          </button>
          <button type="button" aria-label="Close window" className="flex h-5 w-6 items-center justify-center rounded-sm text-[13px] leading-none text-[#4b5563] hover:bg-[#e81123] hover:text-white">
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}

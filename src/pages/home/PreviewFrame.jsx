// A lightweight stand-in for a product screenshot: real UI tokens, no image asset needed.
export default function PreviewFrame({ children, className = '' }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-border bg-surface ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}

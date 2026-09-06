export default function Card({ className = '', children, ...props }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_2px_rgba(20,35,33,0.025)] ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

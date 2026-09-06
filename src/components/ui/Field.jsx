export default function Field({ label, hint, error, htmlFor, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={htmlFor} className="text-label text-text">
          {label}
        </label>
      )}
      {children}
      {error ? (
        <p className="text-supporting text-error">{error}</p>
      ) : hint ? (
        <p className="text-supporting text-muted">{hint}</p>
      ) : null}
    </div>
  )
}

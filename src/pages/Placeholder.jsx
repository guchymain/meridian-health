export default function Placeholder({ title }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="text-h2 text-text">{title}</h1>
        <p className="mt-2 text-body text-muted">This screen hasn't been built yet.</p>
      </div>
    </div>
  )
}

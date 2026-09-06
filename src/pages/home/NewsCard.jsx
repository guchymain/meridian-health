import Card from '../../components/ui/Card.jsx'

export default function NewsCard({ category, title, excerpt, date }) {
  return (
    <Card className="flex flex-col gap-3">
      <span className="w-fit rounded-full bg-info-subtle px-2.5 py-1 text-label text-info">
        {category}
      </span>
      <h4 className="text-h4 text-text">{title}</h4>
      <p className="text-body text-muted">{excerpt}</p>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-supporting text-muted">{date}</span>
        <a href="#insights" className="text-data text-primary hover:underline">
          Read more →
        </a>
      </div>
    </Card>
  )
}

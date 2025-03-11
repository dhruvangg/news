import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

// Sample related articles data
const relatedArticles = [
  {
    id: 101,
    slug: "renewable-energy-investments-reach-record-high",
    title: "Renewable Energy Investments Reach Record High in First Quarter",
    excerpt:
      "Global investments in renewable energy hit $120 billion in Q1, signaling strong momentum in the transition to clean energy.",
    category: "Business",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 102,
    slug: "coastal-cities-prepare-for-rising-sea-levels",
    title: "Coastal Cities Prepare for Rising Sea Levels with Innovative Infrastructure",
    excerpt:
      "Major coastal cities are implementing new defensive strategies against the threat of rising oceans due to climate change.",
    category: "Science",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 103,
    slug: "carbon-capture-technology-breakthrough",
    title: "Scientists Announce Breakthrough in Carbon Capture Technology",
    excerpt:
      "A new method for capturing carbon dioxide from the atmosphere could be a game-changer in fighting climate change.",
    category: "Technology",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
]

export function RelatedArticles() {
  // RelatedArticles({ currentArticleId }: { currentArticleId: number }) 
  // In a real app, you would filter out the current article and fetch related ones
  // const filteredArticles = await getRelatedArticles(currentArticleId, category, tags);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {relatedArticles.map((article) => (
        <Link href={`/article/${article.slug}`} key={article.id}>
          <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-40">
              <img
                src={article.imageUrl || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded">
                {article.category}
              </span>
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold mb-2 line-clamp-2">{article.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}


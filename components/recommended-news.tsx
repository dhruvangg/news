"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Clock, Loader, MessageSquare, ThumbsUp } from "lucide-react"
import { useEffect, useState } from "react"

// Sample data for recommended news
// const recommendedNews = [
//   {
//     id: 1,
//     title: "Space Telescope Captures Stunning Images of Distant Galaxy",
//     excerpt:
//       "Astronomers are analyzing new images that reveal unprecedented details of a galaxy 12 billion light-years away.",
//     category: "Science",
//     author: "Sarah Johnson",
//     publishedAt: "2 hours ago",
//     comments: 24,
//     likes: 156,
//     imageUrl: "/placeholder.svg?height=200&width=300",
//   },
//   {
//     id: 2,
//     title: "New Study Reveals Benefits of Mediterranean Diet",
//     excerpt:
//       "Research confirms that following a Mediterranean diet can significantly reduce the risk of heart disease and improve longevity.",
//     category: "Health",
//     author: "Michael Chen",
//     publishedAt: "4 hours ago",
//     comments: 18,
//     likes: 92,
//     imageUrl: "/placeholder.svg?height=200&width=300",
//   },
//   {
//     id: 3,
//     title: "Electric Vehicle Sales Surge Globally",
//     excerpt:
//       "Sales of electric vehicles have doubled in the past year as more consumers embrace sustainable transportation options.",
//     category: "Business",
//     author: "Emma Rodriguez",
//     publishedAt: "6 hours ago",
//     comments: 31,
//     likes: 127,
//     imageUrl: "/placeholder.svg?height=200&width=300",
//   },
//   {
//     id: 4,
//     title: "Historic Peace Agreement Signed in Middle East",
//     excerpt:
//       "After decades of conflict, regional leaders have signed a landmark peace agreement that promises to bring stability to the region.",
//     category: "World",
//     author: "David Okafor",
//     publishedAt: "8 hours ago",
//     comments: 56,
//     likes: 243,
//     imageUrl: "/placeholder.svg?height=200&width=300",
//   },
//   {
//     id: 5,
//     title: "Artificial Intelligence Transforms Healthcare Diagnostics",
//     excerpt:
//       "New AI systems are helping doctors diagnose diseases with greater accuracy and speed than traditional methods.",
//     category: "Technology",
//     author: "Lisa Wong",
//     publishedAt: "10 hours ago",
//     comments: 42,
//     likes: 178,
//     imageUrl: "/placeholder.svg?height=200&width=300",
//   },
//   {
//     id: 6,
//     title: "Record-Breaking Performance at World Athletics Championship",
//     excerpt: "Athletes shattered three world records during an extraordinary day of competition at the championship.",
//     category: "Sports",
//     author: "James Peterson",
//     publishedAt: "12 hours ago",
//     comments: 37,
//     likes: 215,
//     imageUrl: "/placeholder.svg?height=200&width=300",
//   },
// ]

interface NewsItem {
  id: string;
  title: string;
  image: string;
  slug: string;
  content: string;
  summary: string;
  author: {
    username: string;
    email: string;
  };
  tags: string[];
  status: string;
  publishedAt: string;
}

export function RecommendedNews() {

  const [recommendedNews, setRecommendedNews] = useState<NewsItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  function getRecommandedNews() {
    setIsLoading(true)
    fetch(`/api/posts`).then(res => res.json()).then(data => {
      setRecommendedNews(data.data)
    }).catch(err => {
      setError(err)
    })
    setIsLoading(false)
  }

  useEffect(() => {
    getRecommandedNews()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {isLoading && (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      )}
      {error && <p>{error}</p>}
      {recommendedNews.map((news) => (
        <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-full object-cover" />
            {/* <span className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded">
              {news.category}
            </span> */}
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-bold mb-2 line-clamp-2">{news.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{news.summary}</p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{news.author.email}</span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {news.publishedAt}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" />
                  {10}
                </span>
                <span className="flex items-center gap-1">
                  <ThumbsUp className="h-3 w-3" />
                  {10}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
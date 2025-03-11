import { NewsBanner } from "@/components/news-banner"
import { RecommendedNews } from "@/components/recommended-news"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">NewsHub</h1>
            <div className="flex items-center gap-4">
              <button className="text-sm font-medium">Sign In</button>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
          <nav className="flex gap-6 border-b pb-2">
            <a href="#" className="text-sm font-medium text-primary">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground">
              World
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground">
              Politics
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground">
              Business
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground">
              Technology
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground">
              Science
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground">
              Health
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground">
              Sports
            </a>
          </nav>
        </header>

        <section className="mb-12">
          <NewsBanner />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Recommended For You</h2>
          <RecommendedNews />
        </section>
      </div>
    </main>
  )
}


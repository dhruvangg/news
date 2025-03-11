import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Bookmark, Calendar, Clock, Facebook, MessageSquare, Share2, ThumbsUp, Twitter } from "lucide-react"
import Link from "next/link"
import { RelatedArticles } from "@/components/related-articles"
import { CommentSection } from "@/components/comment-section"

// This would typically come from a database or API
const article = {
  id: 1,
  slug: "global-climate-summit-reaches-historic-agreement",
  title: "Global Climate Summit Reaches Historic Agreement on Carbon Emissions",
  excerpt: "World leaders have agreed on ambitious targets to reduce carbon emissions by 2030.",
  content: `
    <p class="lead">After two weeks of intense negotiations, world leaders at the Global Climate Summit have reached a historic agreement to significantly reduce carbon emissions by 2030, marking a major milestone in the fight against climate change.</p>
    
    <p>The agreement, which was signed by 195 countries, commits nations to reducing their carbon emissions by at least 50% compared to 2005 levels within the next decade. This ambitious target exceeds previous commitments and reflects the growing urgency of addressing climate change.</p>
    
    <p>"This is a landmark moment for our planet," said United Nations Secretary-General António Guterres. "For the first time, we have a truly global commitment to tackle the climate crisis with the urgency it demands."</p>
    
    <h2>Key Points of the Agreement</h2>
    
    <p>The agreement includes several key provisions:</p>
    
    <ul>
      <li>A commitment to reach net-zero emissions by 2050</li>
      <li>A $100 billion annual fund to help developing nations transition to clean energy</li>
      <li>Mandatory five-year reviews of each country's progress</li>
      <li>Penalties for nations that fail to meet their targets</li>
    </ul>
    
    <p>Environmental activists have cautiously welcomed the agreement, though many argue that even more ambitious targets are needed to prevent the worst effects of climate change.</p>
    
    <blockquote>
      <p>"While this agreement represents significant progress, the science is clear that we need to move even faster," said Greta Thunberg, climate activist. "Every fraction of a degree matters, and we cannot afford to be complacent."</p>
    </blockquote>
    
    <h2>Implementation Challenges</h2>
    
    <p>Despite the widespread support for the agreement, experts acknowledge that implementation will be challenging. Many countries will need to dramatically transform their energy systems, transportation networks, and industrial processes to meet the new targets.</p>
    
    <p>"The hard work begins now," said Dr. James Hansen, climate scientist. "This agreement sets ambitious goals, but achieving them will require unprecedented cooperation and innovation."</p>
    
    <p>The agreement also establishes a new international body, the Climate Implementation Task Force, which will monitor progress and provide technical assistance to countries struggling to meet their commitments.</p>
    
    <h2>Economic Implications</h2>
    
    <p>The economic implications of the agreement are significant. While some industries, particularly fossil fuel producers, may face challenges, the agreement is expected to accelerate the growth of renewable energy, electric vehicles, and other clean technologies.</p>
    
    <p>"This agreement sends a clear signal to markets and investors that the future is low-carbon," said Christine Lagarde, President of the European Central Bank. "Companies that embrace this transition will thrive, while those that resist it risk being left behind."</p>
    
    <p>Economists estimate that implementing the agreement could create millions of new jobs in clean energy and related sectors, potentially offsetting job losses in fossil fuel industries.</p>
    
    <h2>Public Response</h2>
    
    <p>Public response to the agreement has been largely positive, with polls showing strong support across most countries. Climate protests, which have grown in size and frequency in recent years, are expected to continue as activists push for even more ambitious action.</p>
    
    <p>"This agreement shows that our voices are being heard," said Maria Rodriguez, organizer of Youth for Climate Action. "But we will continue to hold our leaders accountable and push for the transformative change we need."</p>
    
    <p>As countries begin the process of implementing the agreement, the world will be watching closely to see if this historic commitment translates into meaningful action on the ground.</p>
  `,
  category: "World",
  author: {
    name: "Sarah Johnson",
    role: "Environmental Correspondent",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  publishedAt: "May 15, 2023",
  readTime: "8 min read",
  comments: 124,
  likes: 856,
  shares: 342,
  imageUrl: "/placeholder.svg?height=600&width=1200",
  tags: ["Climate Change", "Global Summit", "Carbon Emissions", "Environment"],
}

export default function ArticlePage() {
  // ArticlePage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the article data based on the slug
  // const { slug } = params;
  // const article = await getArticleBySlug(slug);

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
            
            <Link href="/" className="text-sm font-medium text-muted-foreground">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium text-primary">
              World
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground">
              Politics
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground">
              Business
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground">
              Technology
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground">
              Science
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground">
              Health
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground">
              Sports
            </Link>
          </nav>
        </header>

        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{article.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{article.excerpt}</p>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={article.author.avatar} alt={article.author.name} />
                  <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{article.author.name}</p>
                  <p className="text-sm text-muted-foreground">{article.author.role}</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="flex items-center mr-4">
                  <Calendar className="mr-1 h-4 w-4" />
                  {article.publishedAt}
                </span>
                <span className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <img
              src={article.imageUrl || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-auto rounded-lg object-cover aspect-video"
            />
          </div>

          <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: article.content }} />

          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag) => (
              <span key={tag} className="bg-muted px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-b py-4 mb-8">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <ThumbsUp className="h-4 w-4" />
                <span>{article.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>{article.comments}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Bookmark className="h-4 w-4" />
                <span>Save</span>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Share:</span>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <CommentSection articleId={article.id} />

          <Separator className="my-12" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <RelatedArticles currentArticleId={article.id} />
          </section>
        </article>
      </div>
    </main>
  )
}


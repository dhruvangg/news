"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Sample data for the banner
const bannerNews = [
    {
        id: 1,
        title: "Global Climate Summit Reaches Historic Agreement",
        description: "World leaders have agreed on ambitious targets to reduce carbon emissions by 2030.",
        category: "World",
        imageUrl: "/placeholder.svg?height=500&width=1000",
    },
    {
        id: 2,
        title: "Tech Giant Unveils Revolutionary AI Assistant",
        description: "The new AI system can understand and respond to complex human queries with unprecedented accuracy.",
        category: "Technology",
        imageUrl: "/placeholder.svg?height=500&width=1000",
    },
    {
        id: 3,
        title: "Major Breakthrough in Cancer Research",
        description: "Scientists discover a new treatment approach that shows promising results in clinical trials.",
        category: "Health",
        imageUrl: "/placeholder.svg?height=500&width=1000",
    },
    {
        id: 4,
        title: "Economic Recovery Exceeds Expectations",
        description: "Global markets show strong growth as pandemic restrictions ease in major economies.",
        category: "Business",
        imageUrl: "/placeholder.svg?height=500&width=1000",
    },
]

export function NewsBanner() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === bannerNews.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? bannerNews.length - 1 : prev - 1))
    }

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    useEffect(() => {
        let interval: NodeJS.Timeout

        if (isAutoPlaying) {
            interval = setInterval(() => {
                nextSlide()
            }, 5000)
        }

        return () => {
            if (interval) clearInterval(interval)
        }
    }, [isAutoPlaying, currentSlide])

    return (
        <div
            className="relative rounded-xl overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <div className="relative h-[400px] md:h-[500px]">
                {bannerNews.map((news, index) => (
                    <div
                        key={news.id}
                        className={cn(
                            "absolute inset-0 transition-opacity duration-500",
                            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
                        )}
                    >
                        <img src={news.imageUrl || "/placeholder.svg"} alt={news.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white z-20 w-full md:w-3/4">
                            <span className="inline-block bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded mb-2">
                                {news.category}
                            </span>
                            <h2 className="text-2xl md:text-4xl font-bold mb-2">{news.title}</h2>
                            <p className="text-sm md:text-base opacity-90 mb-4">{news.description}</p>
                            <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-white/90 transition-colors">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {bannerNews.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={cn(
                            "w-3 h-3 rounded-full transition-all",
                            index === currentSlide ? "bg-white scale-110" : "bg-white/50",
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}


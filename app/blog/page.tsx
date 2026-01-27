import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Painting Tips & News | Sydney Gold Star Group Blog',
    description: 'Expert advice on house painting, colour selection, and property maintenance for Sydney homeowners.',
}

export default function BlogPage() {
    const posts = [
        {
            id: 1,
            title: "How much does it cost to paint a house in Sydney? (2026 Guide)",
            excerpt: "Understanding the factors that influence painting costs, from square meterage to paint quality and preparation work.",
            date: "Jan 15, 2026",
            author: "Gold Star Team",
            category: "Cost Guide",
            slug: "#" // Placeholder link
        },
        {
            id: 2,
            title: "The benefits of premium paint for Australian weather",
            excerpt: "Why investing in high-quality UV-resistant paint is crucial for protecting your home against Sydney's harsh sun and storms.",
            date: "Jan 10, 2026",
            author: "Gold Star Team",
            category: "Maintenance",
            slug: "#"
        },
        {
            id: 3,
            title: "Commercial vs Residential Painting: What's the difference?",
            excerpt: "Exploring the different requirements, materials, and processes involved in commercial strata painting compared to residential projects.",
            date: "Dec 05, 2025",
            author: "Gold Star Team",
            category: "Commercial",
            slug: "#"
        }
    ]

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-navy-900 py-16 text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Painting News & Tips</h1>
                <p className="text-gray-300">Expert advice from Sydney's trusted painters.</p>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-12">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
                            <div className="p-8">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                                    <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
                                    <span className="px-2 py-1 bg-gold-50 rounded text-gold-700 font-medium text-xs uppercase">{post.category}</span>
                                </div>

                                <h2 className="text-2xl font-bold text-navy-900 mb-3 hover:text-gold-600 transition-colors">
                                    <Link href={post.slug}>{post.title}</Link>
                                </h2>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {post.excerpt}
                                </p>

                                <Link href={post.slug} className="inline-flex items-center text-gold-600 font-semibold hover:text-gold-700">
                                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

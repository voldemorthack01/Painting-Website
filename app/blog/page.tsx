import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Painting Tips & News | PM Painting Blog',
    description: 'Expert advice on house painting, colour selection, and property maintenance for Sydney homeowners.',
}

export default function BlogPage() {
    const posts = [
        {
            id: 1,
            title: "Welcome to PM Painting",
            excerpt: "Sydney Gold Star Group is now PM Painting. Read about our new look and expanded service areas.",
            date: "Jan 28, 2026",
            author: "Gold Star Team",
            category: "Announcement",
            slug: "/blog/welcome-to-pm-painting"
        },
        {
            id: 2,
            title: "Commercial vs Residential Painting: What's the Difference?",
            excerpt: "Understand the key differences between particular equipment, materials, and scheduling for different project types.",
            date: "Jan 20, 2026",
            author: "Gold Star Team",
            category: "Guide",
            slug: "/blog/commercial-vs-residential"
        },
        {
            id: 3,
            title: "How Much Does it Cost to Paint a House in Sydney? (2026 Guide)",
            excerpt: "A transparent breakdown of painting costs in Sydney for 2026, covering interior and exterior estimates.",
            date: "Jan 15, 2026",
            author: "Gold Star Team",
            category: "Cost Guide",
            slug: "/blog/cost-to-paint-house-sydney-2026"
        },
        {
            id: 4,
            title: "The Benefits of Premium Paint for Australian Weather",
            excerpt: "Why investing in UV-resistant premium paint is crucial for protecting your home against the harsh Australian sun.",
            date: "Jan 10, 2026",
            author: "Gold Star Team",
            category: "Tips",
            slug: "/blog/benefits-of-premium-paint"
        }
    ]

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-navy-900 py-16 text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Painting News & Tips</h1>
                <p className="text-gray-300">Expert advice from Sydney's trusted painters.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white h-full">
                            <div className="p-8 flex flex-col h-full">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                                    <span className="px-2 py-1 bg-gold-50 rounded text-gold-700 font-medium text-xs uppercase">{post.category}</span>
                                </div>

                                <h2 className="text-2xl font-bold text-navy-900 mb-3 hover:text-gold-600 transition-colors">
                                    <Link href={post.slug}>{post.title}</Link>
                                </h2>

                                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                                    {post.excerpt}
                                </p>

                                <Link href={post.slug} className="inline-flex items-center text-gold-600 font-semibold hover:text-gold-700 mt-auto">
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

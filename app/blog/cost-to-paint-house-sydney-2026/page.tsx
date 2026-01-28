import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: "How Much Does it Cost to Paint a House in Sydney? (2026 Guide)",
    description: "A transparent guide to painting costs in Sydney for 2026. Interior and exterior price estimates for apartments and houses.",
};

export default function CostToPaintPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-navy-900 py-16 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <Link href="/blog" className="inline-flex items-center text-gold-400 hover:text-white transition-colors text-sm font-medium">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                        </Link>
                    </div>
                </div>
            </div>

            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-20">
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-8">
                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-gold-500" /> Jan 15, 2026</span>
                        <span className="flex items-center gap-2"><User className="w-4 h-4 text-gold-500" /> Gold Star Team</span>
                        <span className="px-3 py-1 bg-navy-50 text-navy-900 rounded-full font-medium text-xs uppercase tracking-wide">Cost Guide</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-navy-900 mb-8 leading-tight">
                        How Much Does it Cost to Paint a House in Sydney? (2026 Guide)
                    </h1>

                    <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-normal">
                        <p>
                            Price is the #1 question we get asked. While every house is unique, here are the <strong>2026 market averages</strong> for professional painting services in Sydney.
                        </p>

                        <div>
                            <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Interior Repaint</h2>
                            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                                <div>
                                    <h3 className="font-bold text-navy-800">2-Bedroom Apartment</h3>
                                    <p className="text-gold-600 font-bold text-xl">$3,000 - $5,500</p>
                                </div>
                                <div className="border-t border-gray-200 pt-4">
                                    <h3 className="font-bold text-navy-800">3-Bedroom House</h3>
                                    <p className="text-gold-600 font-bold text-xl">$6,000 - $10,000</p>
                                </div>
                            </div>
                            <p className="mt-4 text-base">
                                <strong>Factors:</strong> Ceiling height, condition of walls (holes/cracks), and drastic colour changes (e.g., going from dark to light).
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Exterior Repaint</h2>
                            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                                <div>
                                    <h3 className="font-bold text-navy-800">Single Storey House</h3>
                                    <p className="text-gold-600 font-bold text-xl">$8,000 - $15,000</p>
                                </div>
                                <div className="border-t border-gray-200 pt-4">
                                    <h3 className="font-bold text-navy-800">Double Storey House</h3>
                                    <p className="text-gold-600 font-bold text-xl">$12,000 - $25,000+</p>
                                </div>
                            </div>
                            <p className="mt-4 text-base">
                                <strong>Factors:</strong> Scaffolding requirements, condition of weatherboards/render, and heritage details.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-navy-900 mb-4">Why the Variance?</h2>
                            <p>
                                Cheap quotes often skip preparation. They paint over mold, dirt, and flaking paint. At PM Painting, we sand, clean, prime, and use premium paints, ensuring your finish acts as a protective shield for 10+ years.
                            </p>
                        </div>

                        <div className="mt-8 text-center bg-navy-900 text-white p-8 rounded-xl">
                            <h3 className="text-xl font-bold mb-2">Don't Guess. Get a Fixed Price.</h3>
                            <p className="text-gray-300 mb-6">Every home is different. We offer free on-site inspections.</p>
                            <Link href="/contact">
                                <Button className="bg-gold-400 text-navy-900 hover:bg-gold-500 font-bold h-12 px-8">
                                    Contact us for a fixed-price inspection
                                </Button>
                            </Link>
                        </div>

                        <p className="text-center text-sm mt-4">
                            See our <Link href="/services/residential-painting" className="text-navy-900 underline">Residential Services</Link> page for more info.
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
}

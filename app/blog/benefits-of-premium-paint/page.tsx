import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: "The Benefits of Premium Paint for Australian Weather | Dulux Weathershield",
    description: "Why investing in premium paint is crucial for Sydney homes. Protect against UV radiation and harsh storms with trade-quality coatings.",
};

export default function PremiumPaintBenefitsPage() {
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
                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-gold-500" /> Jan 10, 2026</span>
                        <span className="flex items-center gap-2"><User className="w-4 h-4 text-gold-500" /> Gold Star Team</span>
                        <span className="px-3 py-1 bg-navy-50 text-navy-900 rounded-full font-medium text-xs uppercase tracking-wide">Tips</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-navy-900 mb-8 leading-tight">
                        The Benefits of Premium Paint for Australian Weather
                    </h1>

                    <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-normal">
                        <p>
                            The Australian sun is harsh. UV radiation breaks down cheap paint in 2-3 years, leading to cracking, chalking, and fading. Investing in premium paint is the smartest decision for your property.
                        </p>

                        <div>
                            <h2 className="text-2xl font-bold text-navy-900 mb-4">1. UV Resistance</h2>
                            <p>
                                Premium paints (like <strong>Dulux Weathershield</strong>) feature advanced "flex" technology. This allows the paint membrane to expand and contract with the heat of the day and the cool of the night, preventing the micro-cracking that allows moisture to enter your walls.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Washability</h2>
                            <p>
                                For interiors, cheap paint rubs off when you clean it, leaving shiny patches or exposing the plaster. Premium paints create a cross-linked barrier against dirt and scuffs, allowing you to wipe away marks without damaging the finish.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-navy-900 mb-4">3. The Cost Benefit</h2>
                            <p>
                                Premium paint might cost $50 more per tin, but it lasts <strong>5 years longer</strong> than budget alternatives. When you factor in the cost of labour (painting your house every 10 years vs every 4 years), premium paint is the cheapest insurance for your home.
                            </p>
                        </div>

                        <div className="bg-gold-50 p-6 rounded-lg">
                            <p className="font-bold text-navy-900">
                                We only use trade-certified premium products for all our projects.
                            </p>
                            <div className="mt-2">
                                <Link href="/services/residential-painting" className="text-gold-700 font-bold hover:underline">
                                    See our residential work results
                                </Link>
                                <span className="mx-2 text-gray-400">|</span>
                                <Link href="/services/roof-painting" className="text-gold-700 font-bold hover:underline">
                                    Roof Restoration (High UV Exposure)
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}

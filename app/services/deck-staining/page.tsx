import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, Star } from "lucide-react";

export const metadata: Metadata = {
    title: "Deck Staining & Oiling Sydney | Timber Protection",
    description: "Professional deck staining, oiling, and restoration services. Bring your timber back to life. Serving Sydney & Central Coast.",
};

export default function DeckStainingPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-navy-900">
                <Image
                    src="/images/Gallery/project4.jpg" // Using project4 as placeholder for deck if needed
                    alt="Deck Staining Sydney"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 text-gold-400 font-bold uppercase tracking-widest text-sm mb-4">
                        <Star className="w-4 h-4 fill-gold-400" />
                        <span>Timber Specialists</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                        Deck Staining & Oiling
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Preserve the natural beauty of your timber with our expert maintenance services.
                    </p>
                    <Link href="/contact">
                        <Button className="h-14 px-8 text-lg bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold">
                            Free Quote
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-navy-900 mb-6">Timber Deck Restoration</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                The harsh Australian sun can quickly damage timber decks. Our <strong className="text-navy-900">painting and decoration team</strong> specializes in bringing grey, weathered timber back to life.
                            </p>
                            <p>
                                We use premium oils and stains to nourish the wood, prevent rot, and enhance the grain. Whether you have a Merbau deck in Sydney or a Treated Pine pergola on the Central Coast, we have the right solution.
                            </p>
                            <ul className="space-y-3 mt-6">
                                {[
                                    "Deep Cleaning & Sanding",
                                    "Premium Decking Oils (Water & Oil Based)",
                                    "Pergola & Fence Staining",
                                    "Non-Slip Coatings",
                                    "Regular Maintenance Plans"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-medium text-navy-800">
                                        <CheckCircle2 className="w-5 h-5 text-gold-400" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                        <Image
                            src="/images/Gallery/project1.jpg"
                            alt="Deck Renovation"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

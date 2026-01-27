import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, Star } from "lucide-react";

export const metadata: Metadata = {
    title: "Roof Painting & Restoration Sydney | Heat Reflective Coatings",
    description: "Extend the life of your roof with professional roof painting and restoration. Serving Sydney and Central Coast homeowners.",
};

export default function RoofPaintingPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-navy-900">
                <Image
                    src="/images/Gallery/project6.jpg" // Use project6 for roof if applicable
                    alt="Roof Painting Sydney"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 text-gold-400 font-bold uppercase tracking-widest text-sm mb-4">
                        <Star className="w-4 h-4 fill-gold-400" />
                        <span>Protection & Value</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                        Roof Painting & Restoration
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Protect your home from the elements with premium, heat-reflective roof coatings.
                    </p>
                    <Link href="/contact">
                        <Button className="h-14 px-8 text-lg bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold">
                            Get a Free Inspection
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-navy-900 mb-6">Complete Roof Restoration</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                A faded or damaged roof can significantly impact your home's value and efficiency. Our <strong className="text-navy-900">roof painting and decoration services</strong> restore the look and integrity of your roof, protecting it for years to come.
                            </p>
                            <p>
                                We specialize in cleaning, repairing pointing, and applying advanced membrane coatings that can reflect heat and lower your cooling costs. Serving the entire region from Sydney to the Central Coast.
                            </p>
                            <ul className="space-y-3 mt-6">
                                {[
                                    "High-Pressure Cleaning",
                                    "Tile & Metal Roof Painting",
                                    "Re-pointing & Re-bedding",
                                    "Heat Reflective Technology",
                                    "10-Year Warranty on Membranes"
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
                            src="/images/Gallery/project3.jpg"
                            alt="Roof Restoration Process"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: "Commercial vs Residential Painting - Differences Explained | PM Painting",
    description: "Understand the key differences between residential and commercial strata painting in Sydney. Learn about equipment, materials, and scheduling.",
};

export default function CommercialVsResidentialPage() {
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
                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-gold-500" /> Jan 20, 2026</span>
                        <span className="flex items-center gap-2"><User className="w-4 h-4 text-gold-500" /> Gold Star Team</span>
                        <span className="px-3 py-1 bg-navy-50 text-navy-900 rounded-full font-medium text-xs uppercase tracking-wide">Guide</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-navy-900 mb-8 leading-tight">
                        Commercial vs Residential Painting: What&apos;s the Difference?
                    </h1>

                    <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-normal">
                        <p>
                            Many clients ask if we handle large strata jobs. The answer is yes. While both involve applying paint to surfaces, <strong>residential</strong> and <strong>commercial painting</strong> differ significantly in scale, execution, and materials. Here is how they differ.
                        </p>

                        <div>
                            <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Scale & Equipment</h2>
                            <p>
                                <strong>Residential painting</strong> is about detail, precision, and protection of your personal belongings. We focus on covering furniture, taping edges, and ensuring a showroom finish in your living room.
                            </p>
                            <p className="mt-2">
                                <strong>Commercial painting</strong> often requires heavy-duty equipment. For strata complexes or office buildings, we utilize boom lifts, scaffolding, and industrial spray guns to cover large surface areas efficiently and safely.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Materials Used</h2>
                            <p>
                                We use different paint systems depending on the environment.
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-2">
                                <li><strong>Residential:</strong> Focuses on aesthetics, low-VOC (smell), and washability. We use premium products like Dulux Wash&Wear to handle family life.</li>
                                <li><strong>Commercial:</strong> Coatings need to be tougher. We use industrial-grade paints designed for high traffic, impact resistance, and extreme UV exposure.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-navy-900 mb-4">3. Scheduling & Flexibility</h2>
                            <p>
                                We paint houses during the day to suit your lifestyle. However, for <strong>commercial projects</strong>, we understand that business continuity is key. We often schedule work during evenings or weekends to ensure we don't disrupt your operations or customers.
                            </p>
                        </div>

                        <div className="bg-navy-50 p-6 rounded-xl border-l-4 border-navy-900">
                            <p className="font-medium text-navy-900">
                                Whether it's a home in Hornsby or an office in Parramatta, PM Painting has the specific team for the job.
                            </p>
                            <div className="mt-4">
                                <Link href="/contact" className="text-gold-600 font-bold hover:underline inline-flex items-center">
                                    Get a quote today <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500 pt-4">
                            check out our <Link href="/blog/welcome-to-pm-painting" className="text-navy-900 underline">introduction post</Link> for more about our rebrand.
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
}

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function BeforeAfter() {
    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8 text-center bg-navy-900 text-white">
                <h3 className="text-2xl font-bold mb-2">See the Gold Star Difference</h3>
                <p className="text-gray-300 text-2xl">Don't settle for less. We restore, repair, and revitalize.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 relative">
                {/* Before Info Label */}
                <div className="absolute top-4 left-4 z-10 bg-black/70 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider backdrop-blur-sm">
                    Before
                </div>

                {/* After Info Label */}
                <div className="absolute top-4 right-4 z-10 bg-gold-500 text-navy-900 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                    After
                </div>

                {/* Before Image */}
                <div className="relative h-80 bg-gray-200 grayscale group">
                    {/* Placeholder for cracked wall */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                        <Image
                            src="/images/Gallery/project3.jpg"
                            alt="Cracked Peeling Wall"
                            fill
                            className="object-cover opacity-80"
                        />
                    </div>
                    <div className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-md">
                        Peeling &amp; Cracked
                    </div>
                </div>

                {/* After Image */}
                <div className="relative h-80 bg-ice">
                    {/* Placeholder for smooth wall */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                            src="/images/Gallery/project2.jpg"
                            alt="Smooth Painted Wall"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute bottom-4 right-4 text-white font-bold text-lg drop-shadow-md text-right">
                        Flawless Finish
                    </div>
                </div>
            </div>

            {/* Decorative arrow in the middle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-xl z-20 hidden md:block">
                <ArrowRight className="w-6 h-6 text-gold-500" />
            </div>
        </div>
    );
}

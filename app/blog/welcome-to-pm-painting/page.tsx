import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to PM Painting | Painters Upper North Shore & Sydney",
  description: "Sydney Gold Star Group is now PM Painting. We provide licensed residential, commercial, and strata painting from Hornsby to the Central Coast.",
};

export default function BlogPost() {
  return (
    <main className="pt-24 pb-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-gold-500 font-semibold uppercase tracking-wider text-sm mb-2">
            Company News • January 28, 2026
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Welcome to PM Painting – Sydney’s New Standard in Professional Painting
          </h1>
        </div>

        {/* Content Body */}
        <div className="prose prose-lg text-slate-600">
          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">Same Gold Star Quality. A Fresh New Name.</h2>
          <p className="mb-4">
            For years, we have served the Sydney community under the name <strong>Sydney Gold Star Group</strong>, building a reputation for reliability, precision, and high-quality finishes. Today, we are proud to announce our evolution.
          </p>
          <p className="mb-4 text-lg font-medium text-navy-800">
            Welcome to PM Painting.
          </p>
          <p className="mb-4">
            While our name has changed to better reflect our core expertise, our commitment remains exactly the same: providing top-tier residential, commercial, and strata painting services across <strong>Greater Sydney</strong> and the <strong>Central Coast</strong>.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">Proudly Local to the Upper North Shore</h2>
          <p className="mb-4">
            Based in <strong>Mount Colah</strong>, we understand the unique needs of Sydney homes. Whether it’s protecting timber weatherboards from the Australian sun in <strong>Hornsby</strong> or refreshing a modern apartment complex in <strong>Chatswood</strong>, we know which paints and techniques stand the test of time in our climate.
          </p>
          <p className="mb-4">
            We are not just contractors; we are your locals. Being local means we turn up on time, we respect your property, and we are just a phone call away for post-job support.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">What We Do Best</h2>
          <p className="mb-4">
            We specialize in transforming properties with a focus on durability and aesthetics.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <Link href="/services/residential-painting" className="text-navy-700 font-semibold hover:text-gold-500 underline decoration-gold-400/50">Residential Repaints</Link>: From single-room refreshes to full exterior makeovers.
            </li>
            <li>
              <Link href="/services/commercial-painting" className="text-navy-700 font-semibold hover:text-gold-500 underline decoration-gold-400/50">Licensed Strata Painting</Link>: We work directly with Body Corporates and Strata Managers to handle large-scale maintenance with minimal disruption to residents.
            </li>
            <li>
              <Link href="/services/commercial-painting" className="text-navy-700 font-semibold hover:text-gold-500 underline decoration-gold-400/50">Commercial Projects</Link>: Offices, retail spaces, and industrial sites requiring heavy-duty coatings.
            </li>
            <li>
              <Link href="/services/roof-painting" className="text-navy-700 font-semibold hover:text-gold-500 underline decoration-gold-400/50">Deck & Roof Restoration</Link>: Extending the life of your outdoor areas.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">Serving Sydney to the Central Coast</h2>
          <p className="mb-4">
            One of the most common questions we get is, "Do you come to my area?" The answer is almost always yes. Our team covers a massive footprint, bridging the gap between the city and the coast. We regularly service:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded border-l-4 border-gold-400">
                <span className="block font-bold text-navy-900">Upper North Shore & Hornsby</span>
                <span className="text-sm">Wahroonga, Turramurra, Pymble, Hornsby, Mount Colah & Berowra.</span>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-gold-400">
                <span className="block font-bold text-navy-900">The Central Coast</span>
                <span className="text-sm">Gosford, Woy Woy, Terrigal, Erina, Umina Beach & Wyong.</span>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-gold-400">
                <span className="block font-bold text-navy-900">Western Sydney & The Hills</span>
                <span className="text-sm">Parramatta, Castle Hill, Kellyville, Penrith, Blacktown & Bella Vista.</span>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-gold-400">
                <span className="block font-bold text-navy-900">Inner West & Sydney City</span>
                <span className="text-sm">Strathfield, Burwood, Drummoyne, Balmain, Glebe & Sydney CBD.</span>
            </div>
          </div>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-4">Ready to Start Your Project?</h2>
          <p className="mb-6">
            We are offering free, no-obligation quotes to celebrate the launch of our new website. Whether you are looking to increase your property value before selling or just want a fresh look for the new year, let’s chat.
          </p>

          <Link 
            href="/contact" 
            className="inline-block bg-navy-900 text-white font-semibold px-8 py-3 rounded-md hover:bg-gold-500 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
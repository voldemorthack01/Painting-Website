import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: {
        template: "%s | Sydney Gold Star Group",
        default: "Painters Sydney | Residential & Commercial | Sydney Gold Star Group",
    },
    description: "Professional painters in Sydney & Central Coast. Residential, Commercial, Roof Painting & Deck Staining. Licensed, Insured, and Satisfaction Guaranteed.",
    keywords: ["Painters Sydney", "Painters Central Coast", "Commercial Painters", "House Painters", "Roof Painting Sydney", "Deck Staining"],
    authors: [{ name: "Sydney Gold Star Group" }],
    openGraph: {
        type: "website",
        locale: "en_AU",
        url: "https://sydneygs.com",
        title: "Painters Sydney | Residential & Commercial | Sydney Gold Star Group",
        description: "Professional painters in Sydney & Central Coast. Residential, Commercial, Roof Painting & Deck Staining.",
        siteName: "Sydney Gold Star Group",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    // JSON-LD Schema for Local Business
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Sydney Gold Star Group Pty Ltd",
        "image": "https://sydneygs.com/images/Logos/logo.png",
        "@id": "https://sydneygs.com",
        "url": "https://sydneygs.com",
        "telephone": "0400000000",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Sydney",
            "addressRegion": "NSW",
            "addressCountry": "AU"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -33.8688,
            "longitude": 151.2093
        },
        "areaServed": [
            "Sydney",
            "Central Coast",
            "Penrith",
            "Gosford",
            "Hornsby",
            "Parramatta"
        ],
        "priceRange": "$$"
    };

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

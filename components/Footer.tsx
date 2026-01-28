import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-navy-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">Sydney <span className="text-gold-500">Gold Star</span></h3>
                        <p className="text-sm leading-relaxed">
                            Professional painting and decoration services for residential and commercial properties across Sydney and Central Coast. Quality you can trust.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gold-500"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-gold-500"><Instagram className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-gold-500">Home</Link></li>
                            <li><Link href="/about" className="hover:text-gold-500">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-gold-500">Services</Link></li>
                            <li><Link href="/gallery" className="hover:text-gold-500">Gallery</Link></li>
                            <li><Link href="/blog" className="hover:text-gold-500">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-gold-500">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Our Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/services/residential-painting" className="hover:text-gold-500">Residential Painting</Link></li>
                            <li><Link href="/services/commercial-painting" className="hover:text-gold-500">Commercial Painting</Link></li>
                            <li><Link href="/services/roof-painting" className="hover:text-gold-500">Roof Painting</Link></li>
                            <li><Link href="/services/deck-staining" className="hover:text-gold-500">Deck Staining</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                <span>Sydney to Central Coast (Including all suburbs & towns)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                <a href="tel:0493332306" className="hover:text-white">0493 332 306</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                <a href="mailto:info@sydneygs.com" className="hover:text-white">info@sydneygs.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-navy-800 mt-12 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Sydney Gold Star Group Pty Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us | Sydney Gold Star Group - Painters Sydney',
    description: 'Contact Sydney Gold Star Group for a free painting quote. Call 0493 332 306. Serving Sydney, Penrith, Central Coast, and Parramatta.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="bg-navy-900 py-16 text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-gray-300">Ready to transform your space? We're here to help.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Side: Contact Details */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-navy-900 mb-6">Get in Touch</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Ready to transform your space? Contact Sydney Gold Star Group today for a free, no-obligation quote.
                                We respond to all inquiries within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-gold-500/10 p-3 rounded-lg text-gold-600">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy-900">Phone</h3>
                                    <a href="tel:0493332306" className="text-lg text-gray-700 hover:text-gold-600 font-medium">
                                        0493 332 306
                                    </a>
                                    <p className="text-sm text-gray-500 mt-1">Mon - Sat: 7am - 5pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-gold-500/10 p-3 rounded-lg text-gold-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy-900">Email</h3>
                                    <a href="mailto:info@sydneygs.com" className="text-lg text-gray-700 hover:text-gold-600">
                                        info@sydneygs.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-gold-500/10 p-3 rounded-lg text-gold-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy-900">Service Areas</h3>
                                    <p className="text-gray-700">
                                        Sydney, Penrith, Central Coast, Gosford, Parramatta, Hornsby & Surrounds.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="h-64 bg-gray-100 rounded-xl overflow-hidden border border-gray-200 flex items-center justify-center">
                            <iframe
                                title="Sydney Service Area"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.1030232467!2d150.65178526563604!3d-33.84740398642233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW!5e0!3m2!1sen!2sau!4v1703498144675!5m2!1sen!2sau"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                        <h3 className="text-2xl font-bold text-navy-900 mb-6">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        className="flex h-10 w-full text-black rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="0400 000 000"
                                        className="flex h-10 w-full text-black rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="suburb" className="text-sm font-medium text-gray-700">Suburb</label>
                                <input
                                    type="text"
                                    id="suburb"
                                    placeholder="e.g. Parramatta"
                                    className="flex h-10 w-full text-black rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-sm font-medium text-gray-700">Service Required</label>
                                <select
                                    id="service"
                                    className="flex h-10 w-full rounded-md border text-black border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <option value="">Select a service...</option>
                                    <option value="Residential">Residential Painting</option>
                                    <option value="Commercial">Commercial Painting</option>
                                    <option value="Roof">Roof Restoration</option>
                                    <option value="Deck">Deck Staining</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    className="flex min-h-[120px] w-full text-black rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <Button className="w-full bg-navy-900 text-white hover:bg-navy-800" size="lg">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

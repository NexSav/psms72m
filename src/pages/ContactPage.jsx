import React from 'react';
import Navbar from '../components/Navbar';

// Icons
const MapPinIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const PrinterIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
);

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main id="main-content" className="pt-24">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-amber-700 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg text-white/90">
              Get in touch with The Lexington Academy
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">
                    PSMS72 The Lexington Academy
                  </h2>

                  {/* Address */}
                  <div className="flex items-start gap-4 mb-6 p-4 rounded-lg bg-blue-50 border border-blue-100">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                      <MapPinIcon />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-700">
                        131 East 104 Street<br />
                        Manhattan, NY 10029
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 mb-6 p-4 rounded-lg bg-blue-50 border border-blue-100">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                      <PhoneIcon />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a
                        href="tel:212-860-5831"
                        className="text-primary font-semibold hover:underline text-lg"
                      >
                        212-860-5831
                      </a>
                    </div>
                  </div>

                  {/* Fax */}
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-blue-50 border border-blue-100">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                      <PrinterIcon />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Fax</h3>
                      <p className="text-gray-700 font-semibold">212-860-6094</p>
                    </div>
                  </div>
                </div>

                {/* School Hours */}
                <div className="bg-gradient-to-br from-amber-50 to-blue-50 rounded-2xl border border-amber-200 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">School Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">Monday - Friday:</span> 8:00 AM - 3:00 PM</p>
                    <p className="text-sm text-gray-600 mt-4">
                      Main office hours may vary. Please call ahead for assistance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-full min-h-[400px] bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPinIcon />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600 mb-4">
                      131 East 104 Street<br />
                      Manhattan, NY 10029
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=131+East+104+Street+Manhattan+NY+10029"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-blue-800 transition-colors duration-150 shadow-sm"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Contact Info */}
            <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">
                Get in Touch
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">General Inquiries</h3>
                  <p className="text-gray-600 mb-2">
                    For general questions about our school, programs, or admissions, please contact our main office.
                  </p>
                  <a href="tel:212-860-5831" className="text-primary font-semibold hover:underline">
                    212-860-5831
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Parent Coordinator</h3>
                  <p className="text-gray-600 mb-2">
                    Contact our Parent Coordinators for family support and engagement opportunities.
                  </p>
                  <p className="text-gray-700">
                    Evelyn Escalera<br />
                    Darismeily Jose De Abreu
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Principal</h3>
                  <p className="text-gray-700">
                    Dr. Antonio Hernandez, PhD
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Emergency Contact</h3>
                  <p className="text-gray-600 mb-2">
                    For urgent matters during school hours, please call the main office immediately.
                  </p>
                  <a href="tel:212-860-5831" className="text-primary font-semibold hover:underline">
                    212-860-5831
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 PSMS72 The Lexington Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;

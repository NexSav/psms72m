import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  MapPinIcon, 
  PhoneIcon, 
  PrinterIcon, 
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-secondary selection:text-white">
      <Navbar />

      <main id="main-content">
        {/* ============================================================================
            HERO SECTION
        ============================================================================ */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
          <div className="absolute inset-0">
             <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy-900 to-primary"></div>
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
             {/* Decorative elements */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px]"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur rounded-full mb-8 border border-white/20">
               <EnvelopeIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Get in <span className="font-semibold text-secondary">Touch</span>
            </h1>
            <p className="text-xl text-white/80 font-light max-w-2xl mx-auto">
              We are here to support our students and families. Reach out to us with any questions.
            </p>
          </div>
        </section>

        {/* ============================================================================
            CONTACT GRID
        ============================================================================ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Contact Info Card */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Info</h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                        <MapPinIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                        <p className="text-gray-600 leading-relaxed">
                          131 East 104 Street<br />
                          Manhattan, NY 10029
                        </p>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-secondary text-sm font-semibold mt-2 inline-block hover:underline">
                          Get Directions &rarr;
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-secondary">
                        <PhoneIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                        <p className="text-gray-600 mb-1">Main Office</p>
                        <a href="tel:212-860-5831" className="text-lg font-semibold text-primary hover:text-secondary transition-colors">
                          212-860-5831
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-gray-600">
                        <PrinterIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Fax</h3>
                        <p className="text-gray-600 font-medium">
                          212-860-6094
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="bg-primary text-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                   
                   <div className="flex items-center gap-4 mb-6">
                     <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                       <ClockIcon className="w-5 h-5" />
                     </div>
                     <h3 className="text-xl font-bold">School Hours</h3>
                   </div>
                   
                   <div className="space-y-3 relative z-10">
                     <div className="flex justify-between items-center border-b border-white/10 pb-3">
                       <span className="text-white/80">Monday - Friday</span>
                       <span className="font-bold">8:00 AM - 3:00 PM</span>
                     </div>
                     <p className="text-sm text-white/60 pt-2">
                       *Main office hours may vary. Please call ahead.
                     </p>
                   </div>
                </div>
              </div>

              {/* Map & Staff Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Map Placeholder */}
                <div className="bg-gray-200 rounded-3xl shadow-inner overflow-hidden h-[300px] relative group">
                   {/* Replace with actual iframe if available */}
                   <div className="absolute inset-0 flex items-center justify-center bg-gray-100 group-hover:bg-gray-200 transition-colors">
                      <div className="text-center">
                        <MapPinIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        <p className="text-gray-500 font-medium">Interactive Map Integration</p>
                        <a 
                          href="https://www.google.com/maps/search/?api=1&query=131+East+104+Street+Manhattan+NY+10029" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center px-6 py-2 bg-white rounded-full shadow-sm text-primary font-bold text-sm hover:shadow-md transition-all"
                        >
                          Open in Google Maps
                        </a>
                      </div>
                   </div>
                </div>

                {/* Key Contacts */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Contacts</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/20 transition-colors">
                      <h4 className="font-bold text-primary text-lg mb-1">Principal</h4>
                      <p className="text-gray-900 font-medium mb-2">Dr. Antonio Hernandez, PhD</p>
                      <a href="mailto:admin@psms72m.org" className="text-sm text-secondary font-semibold hover:underline flex items-center gap-1">
                        <EnvelopeIcon className="w-4 h-4" /> Contact Administration
                      </a>
                    </div>

                    <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-secondary/20 transition-colors">
                      <h4 className="font-bold text-secondary text-lg mb-1">Parent Coordinators</h4>
                      <div className="text-gray-900 font-medium mb-2 space-y-1">
                        <p>Evelyn Escalera</p>
                        <p>Darismeily Jose De Abreu</p>
                      </div>
                      <span className="text-sm text-gray-500">For family support & engagement</span>
                    </div>

                    <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-300 transition-colors md:col-span-2">
                       <h4 className="font-bold text-gray-900 text-lg mb-2">General Inquiries</h4>
                       <p className="text-gray-600 mb-4">For questions about registration, records, or general information.</p>
                       <div className="flex gap-4">
                         <a href="tel:212-860-5831" className="px-5 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-700 hover:border-primary hover:text-primary transition-all shadow-sm">
                           Call Office
                         </a>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ClockIcon,
  RocketLaunchIcon,
  BellAlertIcon
} from '@heroicons/react/24/outline';

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-secondary selection:text-white">
      <Navbar />

      <main id="main-content">
        {/* ============================================================================
            HERO SECTION
        ============================================================================ */}
        <section className="relative pt-32 pb-20 min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy-900 to-primary"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px]"></div>
            {/* Animated circles */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-secondary/20 rounded-full animate-spin-slow"></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur rounded-full mb-8 border border-white/20 animate-pulse">
              <RocketLaunchIcon className="w-12 h-12 text-secondary" />
            </div>

            {/* Main Content */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 tracking-tight leading-tight">
              Coming <span className="font-semibold text-secondary">Soon</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
              We're working hard to bring you something amazing. This page is currently under construction and will be available soon.
            </p>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">In Progress</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Our team is actively developing this feature to serve you better.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <RocketLaunchIcon className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Launching Soon</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  We're putting the finishing touches to ensure the best experience.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BellAlertIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Stay Tuned</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Check back soon or contact us for more information.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-16">
              <a
                href="/"
                className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
              >
                Back to Home
              </a>
              <a
                href="/contact"
                className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(244,101,36,0.3)] hover:shadow-[0_0_30px_rgba(244,101,36,0.5)] hover:-translate-y-1"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoonPage;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { UserIcon } from '@heroicons/react/24/outline';

const QuoteIcon = () => (
  <svg className="w-8 h-8 text-secondary/40" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91198 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
  </svg>
);

const PrincipalsMessagePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-secondary selection:text-white">
      <Navbar />

      <main id="main-content">
        {/* ============================================================================
            HERO SECTION
        ============================================================================ */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
          {/* Abstract Background */}
          <div className="absolute inset-0">
             <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy-900 to-primary"></div>
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
             {/* Decorative elements */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px]"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur rounded-full mb-8 border border-white/20">
               <UserIcon className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Principal's <span className="font-semibold text-secondary">Message</span>
            </h1>
            <p className="text-lg text-white/80 font-light max-w-2xl mx-auto">
              A letter from Dr. Tracy Smith
            </p>
          </div>
        </section>

        {/* ============================================================================
            LETTER SECTION
        ============================================================================ */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 relative overflow-hidden">
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>
              
              {/* Watermark */}
              <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
                <img src="/assets/images/logo.png" alt="" className="w-64 h-64 object-contain grayscale" />
              </div>

              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 font-serif">
                  Dear Lexington Families,
                </h2>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                  <p>
                    It is an honor and a privilege to have the awesome responsibility of being the principal at
                    The Lexington Academy. I am truly grateful, each and every day, to be entrusted with your most
                    prized possessions; your children. It is a responsibility that I do not take lightly.
                  </p>
                  <p className="font-medium text-primary">
                    It is my solemn promise to always put children first by ensuring that every decision that I make, 
                    will be with the goal of advancing our children socially, emotionally, and academically.
                  </p>
                  <p>
                    I look forward to our partnership and embarking to live up to our school motto, toward making our
                    students, "The Strength of the Future." Through our collaborative partnership, we will live out the
                    true meaning of our vision by ensuring that our children become lifelong learners that are competent,
                    compassionate, committed, conscientious, and competitive contributing citizens of the world.
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
                     {/* Placeholder for Principal's Photo if available, otherwise a generic icon or initials */}
                     <div className="w-full h-full flex items-center justify-center bg-primary text-white font-serif text-xl">DH</div>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm italic mb-1">Educationally yours,</p>
                    <h3 className="text-xl font-bold text-gray-900 font-serif">Dr. Tracy Smith, PhD</h3>
                    <p className="text-primary font-medium text-sm uppercase tracking-wider mt-1">Principal, The Lexington Academy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="mt-12 bg-primary text-white rounded-2xl p-10 text-center relative overflow-hidden shadow-lg">
              <div className="absolute top-4 left-4 opacity-20">
                <QuoteIcon />
              </div>
              <blockquote className="relative z-10">
                <p className="text-2xl md:text-3xl font-serif italic mb-4">
                  "The Strength of the Future"
                </p>
                <footer className="text-sm font-medium uppercase tracking-widest text-white/70">
                  Our School Motto
                </footer>
              </blockquote>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrincipalsMessagePage;

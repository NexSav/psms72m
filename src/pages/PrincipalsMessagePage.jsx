import React from 'react';
import Navbar from '../components/Navbar';

const PrincipalsMessagePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main id="main-content" className="pt-24">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-amber-700 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Principal's Message
            </h1>
            <p className="text-lg text-white/90">
              A letter from Dr. Antonio Hernandez
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
              {/* Greeting */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Dear Lexington Families,
                </h2>
              </div>

              {/* Message Content */}
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  It is an honor and a privilege to have the awesome responsibility of being the principal at
                  The Lexington Academy. I am truly grateful, each and every day, to be entrusted with your most
                  prized possessions; your children. It is a responsibility that I do not take lightly. It is my
                  solemn promise to always put children first by ensuring that every decision that I make, will be
                  with the goal of advancing our children socially, emotionally, and academically.
                </p>

                <p>
                  I look forward to our partnership and embarking to live up to our school motto, toward making our
                  students, "The Strength of the Future." Through our collaborative partnership, we will live out the
                  true meaning of our vision by ensuring that our children become lifelong learners that are competent,
                  compassionate, committed, conscientious, and competitive contributing citizens of the world.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-lg text-gray-700 mb-1">
                  Educationally yours,
                </p>
                <p className="text-xl font-semibold text-gray-900 mt-4">
                  Dr. Antonio Hernandez, PhD
                </p>
                <p className="text-base text-gray-600">
                  Principal, The Lexington Academy
                </p>
              </div>

              {/* Quote Highlight */}
              <div className="mt-12 bg-gradient-to-br from-blue-50 to-amber-50 rounded-xl border border-blue-100 p-6">
                <blockquote className="text-center">
                  <p className="text-lg font-semibold text-primary italic">
                    "The Strength of the Future"
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Our School Motto
                  </p>
                </blockquote>
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

export default PrincipalsMessagePage;

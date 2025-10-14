import React from 'react';
import Navbar from '../components/Navbar';

const TargetIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const MissionStatementPage = () => {
  const coreValues = ['Competent', 'Compassionate', 'Committed', 'Conscientious', 'Competitive'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main id="main-content" className="pt-24">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-primary via-navy-700 to-navy-900 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-yellow rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur rounded-2xl mb-6">
              <TargetIcon />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Mission & Vision Statement
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our commitment to excellence and lifelong learning
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            {/* School Mission */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-16 mb-12">
              <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-6 uppercase tracking-wide">
                School Mission
              </div>
              <h2 className="text-4xl font-bold text-primary mb-8 tracking-tight leading-tight">
                Lighting the Way for Our Leaders of Tomorrow
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                The Lexington Academy seeks to maintain an educational environment in which the <span className="text-secondary font-semibold">entire school community</span>,
                in partnership with community based organizations and families, works to ensure that all students are
                provided with the skills to become <span className="text-secondary font-semibold">lifelong learners</span>. Through collaboration and standards-driven
                instructional curricular, we will engage all students and assist them in achieving high standards that
                will teach them to become competent, compassionate, committed, conscientious, and competitive contributing
                citizens of the world.
              </p>
            </div>

            {/* Vision Statement */}
            <div className="bg-gradient-to-br from-accent-light to-blue-100 rounded-3xl border-2 border-secondary/20 p-10 md:p-16 mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-6 uppercase tracking-wide">
                  Vision Statement
                </div>
                <h2 className="text-4xl font-bold text-primary mb-8 tracking-tight leading-tight">
                  Building Tomorrow's Leaders
                </h2>
                <p className="text-2xl font-semibold text-primary/90 leading-relaxed">
                  To create lifelong learners that are <span className="text-secondary">competent, compassionate, committed, conscientious</span>, and <span className="text-secondary">competitive</span> contributing citizens of the world.
                </p>
              </div>
            </div>

            {/* Core Values Highlight */}
            <div className="mb-12">
              <div className="text-center mb-10">
                <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-4 uppercase tracking-wide">
                  The 5 C's
                </div>
                <h3 className="text-3xl font-bold text-primary">Our Core Values</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {coreValues.map((value, index) => (
                  <div
                    key={value}
                    className="group bg-white rounded-2xl border-2 border-gray-200 p-6 text-center shadow-md hover:shadow-xl hover:border-secondary hover:-translate-y-1 transition-all duration-150"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-navy-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-secondary group-hover:to-orange-600 transition-all duration-150">
                      <span className="text-white font-bold text-2xl">{value.charAt(0)}</span>
                    </div>
                    <div className="text-lg font-bold text-primary group-hover:text-secondary transition-colors duration-150">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary to-navy-800 rounded-3xl p-10 md:p-12 text-center shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join Our Mission
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Together, we can empower students to become the leaders and innovators of tomorrow
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/principals-message"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-primary bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-150"
                >
                  Read Principal's Message
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-full hover:bg-white/10 transition-all duration-150"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-white/80">
            © 2024 PSMS72 The Lexington Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MissionStatementPage;

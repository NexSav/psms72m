import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Target, Eye, Star, Users, ArrowRight } from 'lucide-react';
import { 
  LightBulbIcon,
  GlobeAmericasIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const TargetIcon = () => (
  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const MissionStatementPage = () => {
  const coreValues = ['Competent', 'Compassionate', 'Committed', 'Conscientious', 'Competitive'];

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
               <TargetIcon />
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Mission & <span className="font-semibold text-secondary">Vision</span>
            </h1>
            <p className="text-xl text-white/80 font-light max-w-2xl mx-auto">
              Lighting the path for the leaders of tomorrow through excellence in education and character development.
            </p>
          </div>
        </section>

        {/* ============================================================================
            MISSION & VISION CARDS
        ============================================================================ */}
        <section className="py-20 -mt-12 relative z-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <LightBulbIcon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight group-hover:text-primary transition-colors">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Lexington Academy seeks to maintain an educational environment in which the <span className="font-semibold text-primary">entire school community</span>,
                in partnership with community based organizations and families, works to ensure that all students are
                provided with the skills to become <span className="font-semibold text-primary">lifelong learners</span>. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Through collaboration and standards-driven instructional curricular, we will engage all students and assist them in achieving high standards.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-primary text-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center mb-8 border border-white/20">
                  <GlobeAmericasIcon className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold mb-6 tracking-tight text-white">
                  Our Vision
                </h2>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90">
                  To create lifelong learners that are <span className="font-semibold text-secondary">competent</span>, 
                  <span className="font-semibold text-secondary"> compassionate</span>, 
                  <span className="font-semibold text-secondary"> committed</span>, 
                  <span className="font-semibold text-secondary"> conscientious</span>, and 
                  <span className="font-semibold text-secondary"> competitive</span> contributing citizens of the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================================
            CORE VALUES - THE 5 C's
        ============================================================================ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-2 block">Our Core Values</span>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">The 5 C's of Success</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {coreValues.map((value, index) => (
                <div
                  key={value}
                  className="group bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl border border-gray-100 hover:border-secondary/30 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 group-hover:border-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <span className="text-3xl font-bold text-gray-300 group-hover:text-white transition-colors">
                      {value.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {value}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================================
            CTA SECTION
        ============================================================================ */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-12 md:p-16 shadow-xl border border-gray-100 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                Together, we can empower students to become the leaders and innovators of tomorrow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/principals-message"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary rounded-full hover:bg-navy-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  Principal's Message
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary bg-blue-50 rounded-full hover:bg-blue-100 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MissionStatementPage;

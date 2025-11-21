import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  HeartIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  GlobeAltIcon,
  LifebuoyIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const MentalHealthResourcesPage = () => {
  const schoolContacts = [
    {
      title: 'School Leader',
      name: 'Antonio Hernandez, Principal',
      icon: UserGroupIcon,
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      title: 'Parent Coordinator',
      name: 'Evelyn Escalera\nDarismeily Jose De Abreu',
      icon: HeartIcon,
      color: 'bg-orange-50 text-orange-700 border-orange-200'
    },
    {
      title: 'Respect for All Liaison',
      name: 'Luz Vasquez',
      icon: ShieldCheckIcon,
      color: 'bg-teal-50 text-teal-700 border-teal-200'
    },
    {
      title: 'Sexual Harassment Prevention Liaison',
      name: 'Luz Vasquez',
      icon: ShieldCheckIcon,
      color: 'bg-cyan-50 text-cyan-700 border-cyan-200'
    },
    {
      title: '504 Coordinator',
      name: 'Cortney Trazoff',
      icon: UserGroupIcon,
      color: 'bg-amber-50 text-amber-700 border-amber-200'
    }
  ];

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
               <HeartIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Mental Health <span className="font-semibold text-secondary">Resources</span>
            </h1>
            <p className="text-xl text-white/80 font-light max-w-2xl mx-auto">
              Support and resources for mental wellness and crisis intervention
            </p>
          </div>
        </section>

        {/* ============================================================================
            CONTENT
        ============================================================================ */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
          <div className="max-w-7xl mx-auto space-y-12">

            {/* Intro Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 text-center">
              <p className="text-xl text-gray-700 leading-relaxed font-light max-w-3xl mx-auto">
                Ask your Parent Coordinator, School Social Worker, or School Counselor for more information about your school's mental health program.
              </p>
            </div>

            {/* School Contacts Grid */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-100 p-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center text-primary">
                    <UserGroupIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">School Support Team</h2>
                    <p className="text-gray-600 text-sm mt-1">District Borough Number: 04M072</p>
                  </div>
                </div>
              </div>

              <div className="p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {schoolContacts.map((contact, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl border-2 ${contact.color} hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <contact.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-gray-700 font-medium whitespace-pre-line">
                      {contact.name}
                    </p>
                  </div>
                ))}

                {/* How to Report Bullying Card */}
                <div className="p-6 rounded-2xl border-2 bg-red-50 text-red-700 border-red-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <ExclamationTriangleIcon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">
                    How to Report Bullying
                  </h3>
                  <p className="text-gray-700 font-medium mb-3">
                    Contact Respect for All Liaison or any staff member
                  </p>
                  <a
                    href="/contact"
                    className="text-sm font-bold text-red-700 hover:text-red-900 transition-colors inline-flex items-center gap-1"
                  >
                    Contact School →
                  </a>
                </div>
              </div>
            </div>

            {/* NYC Mental Health for All */}
            <div className="bg-gradient-to-br from-primary to-navy-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <HeartIcon className="w-8 h-8 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold">NYC Mental Health for All</h2>
                </div>
                <p className="text-xl text-white/90 leading-relaxed font-light mb-8">
                  Mental Health for All is a central hub where every New Yorker can connect to care and find mental health resources for themselves and their loved ones. No matter the age, ZIP code, ethnicity, or gender, we want every New Yorker to be able to live their best life.
                </p>
                <a
                  href="https://mentalhealth.cityofnewyork.us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <GlobeAltIcon className="w-5 h-5" />
                  Visit Mental Health for All
                </a>
              </div>
            </div>

            {/* NYC Well Hotline */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-secondary p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">NYC Well Hotline</h2>
                <p className="text-white/90 text-lg font-light">
                  Free, confidential, 24/7 support for stress, depression, anxiety, and substance use
                </p>
              </div>

              <div className="p-8">
                <div className="bg-blue-50 border-l-4 border-primary rounded-lg p-6 mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    NYC Well services include: counselors who will respond without judgment; connection to suicide prevention, crisis counseling and emotional support for you or someone you care about; and referrals to Mobile Crisis Teams for people experiencing a behavioral health crisis.
                  </p>
                  <p className="text-sm text-gray-600 mt-4 font-medium">
                    Text and chat available in English, Spanish, and Chinese. For service in other languages, please call.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors border-2 border-gray-200 hover:border-primary">
                    <PhoneIcon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Talk</h3>
                    <a href="tel:1-888-692-9355" className="text-2xl font-bold text-primary hover:text-secondary transition-colors block mb-2">
                      1-888-NYC-WELL
                    </a>
                    <p className="text-sm text-gray-600">(1-888-692-9355)</p>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500 font-medium">For Relay Service (Deaf/Hard of Hearing):</p>
                      <a href="tel:711" className="text-lg font-bold text-primary">Call 711</a>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors border-2 border-gray-200 hover:border-primary">
                    <ChatBubbleLeftRightIcon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Text</h3>
                    <p className="text-xl font-bold text-gray-900 mb-2">
                      Text <span className="text-secondary">WELL</span> to
                    </p>
                    <p className="text-3xl font-bold text-primary">65173</p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors border-2 border-gray-200 hover:border-primary">
                    <GlobeAltIcon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Chat</h3>
                    <a
                      href="https://nycwell.cityofnewyork.us/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-primary hover:text-secondary transition-colors block"
                    >
                      nyc.gov/nycwell →
                    </a>
                    <p className="text-sm text-gray-600 mt-2">Online chat support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Crisis Supports */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-red-600 p-8 text-white">
                <div className="flex items-center gap-3">
                  <LifebuoyIcon className="w-10 h-10" />
                  <h2 className="text-3xl font-bold">Crisis Supports - Available 24/7</h2>
                </div>
              </div>

              <div className="p-8 grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Suicide Prevention Lifeline</h3>
                  <a href="tel:1-800-273-8255" className="text-4xl font-bold text-red-600 hover:text-red-700 transition-colors block mb-2">
                    1-800-273-TALK
                  </a>
                  <p className="text-xl text-gray-700 font-semibold">(1-800-273-8255)</p>
                  <p className="text-sm text-gray-600 mt-4">
                    Free and confidential support for people in distress, prevention and crisis resources
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Crisis Text Line</h3>
                  <p className="text-2xl font-bold text-gray-900 mb-4">
                    Text <span className="text-secondary">HOME</span> to
                  </p>
                  <p className="text-4xl font-bold text-blue-600">741741</p>
                  <p className="text-sm text-gray-600 mt-4">
                    Free, 24/7 crisis support via text message
                  </p>
                </div>
              </div>
            </div>

            {/* Hite Site */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600">
                  <MagnifyingGlassIcon className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Hite Site</h2>
                  <p className="text-gray-600">Citywide Resource Directory</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Hite Site offers a citywide online search for mental health, social services, and healthcare agencies. Find comprehensive resources and support services throughout New York City.
              </p>

              <a
                href="https://www.hitesite.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <GlobeAltIcon className="w-5 h-5" />
                Search Hite Site
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MentalHealthResourcesPage;

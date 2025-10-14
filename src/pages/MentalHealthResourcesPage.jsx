import React from 'react';
import Navbar from '../components/Navbar';

// Icons
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MessageIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const MentalHealthResourcesPage = () => {
  const schoolContacts = [
    { role: 'School Leader', name: 'Antonio Hernandez, Principal' },
    { role: 'Parent Coordinator', name: 'Evelyn Escalera, Darismeily Jose De Abreu' },
    { role: 'Respect for All Liaison', name: 'Luz Vasquez' },
    { role: 'Sexual Harassment Prevention Liaison', name: 'Luz Vasquez' },
    { role: '504 Coordinator', name: 'Cortney Trazoff' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main id="main-content" className="pt-24">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-amber-700 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <HeartIcon />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Mental Health Resources
            </h1>
            <p className="text-lg text-white/90">
              Support and resources for students and families
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 space-y-8">
            {/* Intro */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Ask your Parent Coordinator, School Social Worker, or School Counselor for more information about
                your school's mental health program.
              </p>
            </div>

            {/* School Contacts */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">
                School Contacts
              </h2>
              <div className="space-y-4">
                {schoolContacts.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors duration-150"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <UserIcon />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{contact.role}</div>
                      <div className="text-gray-600">{contact.name}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* District Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">District Borough Number:</span> 04M072
                </p>
              </div>
            </div>

            {/* How to Report Bullying */}
            <div className="bg-amber-50 rounded-2xl border border-amber-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How to Report Bullying
              </h3>
              <p className="text-gray-700 mb-4">
                If you or someone you know is experiencing bullying, please contact your Respect for All Liaison
                or any trusted school staff member immediately.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Contact School Staff
              </a>
            </div>

            {/* NYC Mental Health for All */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                NYC Mental Health for All
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Mental Health for All is a central hub where every New Yorker can connect to care and find mental
                health resources for themselves and their loved ones. No matter the age, ZIP code, ethnicity, or
                gender, we want every New Yorker to be able to live their best life.
              </p>
            </div>

            {/* NYC Well Hotline */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                NYC Well Hotline
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                NYC Well offers free-confidential-24/7 support for problems like stress, depression, anxiety, and
                drug or alcohol use. NYC Well services include: counselors who will respond without judgment;
                connection to suicide prevention, crisis counseling and emotional support for you or someone you
                care about; and referrals to Mobile Crisis Teams for people experiencing a behavioral health crisis.
              </p>
              <p className="text-sm text-gray-600 mb-6">
                Text and chat available in English, Spanish, and Chinese; for service in other languages please call
                number provided below.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <PhoneIcon />
                    <span className="font-semibold text-gray-900">Talk</span>
                  </div>
                  <a href="tel:1-888-692-9355" className="text-primary font-semibold hover:underline">
                    1-888-NYC-WELL<br />(1-888-692-9355)
                  </a>
                  <p className="text-xs text-gray-600 mt-2">
                    For Relay Service for Deaf/Hard of Hearing: Call 711
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageIcon />
                    <span className="font-semibold text-gray-900">Text</span>
                  </div>
                  <p className="text-primary font-semibold">
                    Text WELL to 65173
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageIcon />
                    <span className="font-semibold text-gray-900">Chat</span>
                  </div>
                  <a
                    href="https://nycwell.cityofnewyork.us/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    nyc.gov/nycwell
                  </a>
                </div>
              </div>
            </div>

            {/* Crisis Supports */}
            <div className="bg-red-50 rounded-2xl border border-red-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                Crisis Supports
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-2">Suicide Prevention Lifeline</div>
                  <a href="tel:1-800-273-8255" className="text-lg text-primary font-semibold hover:underline">
                    1-800-273-TALK (1-800-273-8255)
                  </a>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-2">Crisis Text Line</div>
                  <p className="text-lg text-primary font-semibold">
                    Text HOME to 741741
                  </p>
                </div>
              </div>
            </div>

            {/* Hite Site */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                Hite Site
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Hite Site offers a citywide online search for mental health, social services, and healthcare agencies.
              </p>
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

export default MentalHealthResourcesPage;

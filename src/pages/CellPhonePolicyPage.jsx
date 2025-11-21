import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  DevicePhoneMobileIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  DocumentCheckIcon,
  PhoneIcon,
  LockClosedIcon,
  UserGroupIcon,
  ShieldExclamationIcon
} from '@heroicons/react/24/outline';

const CellPhonePolicyPage = () => {
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
               <DevicePhoneMobileIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Cell Phone & Electronic Device <span className="font-semibold text-secondary">Policy</span>
            </h1>
            <p className="text-xl text-white/90 font-light mb-3">
              Proposed Policy - Effective August 1, 2025
            </p>
            <p className="text-sm text-white/70 font-light">
              In accordance with Education Law §2803
            </p>
          </div>
        </section>

        {/* ============================================================================
            POLICY CONTENT
        ============================================================================ */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
          <div className="max-w-6xl mx-auto">

            {/* Main Document Card */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12">
              {/* Header Bar */}
              <div className="bg-gray-50 border-b border-gray-100 p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center text-primary">
                      <DocumentCheckIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Proposed Policy Document</p>
                      <h2 className="text-xl font-bold text-gray-900">Cell Phone & Electronic Device Policy</h2>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold border border-blue-200 uppercase tracking-wide flex-shrink-0">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Proposed
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-gray-600">
                  <div>
                    <span className="font-semibold">Effective Date:</span> August 1, 2025
                  </div>
                  <div className="text-gray-300">•</div>
                  <div>
                    <span className="font-semibold">Legal Reference:</span> Education Law §2803
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12 space-y-12">

                {/* Purpose */}
                <div className="prose prose-lg max-w-none">
                  <h3 className="text-2xl font-bold text-primary mb-4">Purpose</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To create an environment conducive to learning by minimizing distractions caused by cell phones and other personal internet-enabled electronic devices, ensure the safety and focus of all students during the school day, and follow <span className="font-semibold text-primary">Education Law §2803</span>, effective August 1, 2025. All New York State schools are required to adopt a policy that prohibits the use of personal internet-enabled devices during the school day on school grounds.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-primary rounded-lg p-6 mt-6">
                    <p className="text-sm text-gray-700 leading-relaxed mb-0">
                      <span className="font-bold text-primary">Definition:</span> An "internet-enabled electronic device" is defined as an electronic device capable of connecting to the internet and enabling the user to access content on the internet. Examples of such devices include cell phones, smartphones, smartwatches, laptops, tablets, iPads, and portable music and entertainment systems.
                    </p>
                  </div>
                </div>

                {/* Policy Statement */}
                <div className="prose prose-lg max-w-none">
                  <h3 className="text-2xl font-bold text-primary mb-4">Policy Statement</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Students will not be permitted to use or access their personal internet-enabled electronic devices upon arrival at school until the end of the school day. The school day is defined as the period from the moment students enter the school building until the last class of the day ends, including during lunch.
                  </p>
                  <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-bold text-gray-900 mb-1">School Day Hours</p>
                        <p className="text-3xl font-bold text-secondary">8:25 AM - 2:45 PM</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Students will be able to use</p>
                        <p className="font-semibold text-gray-900 text-lg">School/NYCPS-issued devices</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Collection/Storage */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <LockClosedIcon className="w-7 h-7 text-primary" />
                    1. Collection/Storage
                  </h3>

                  <div className="bg-navy-900 text-white rounded-2xl p-8 md:p-10 shadow-lg relative overflow-hidden mb-6">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                    <div className="relative z-10">
                      <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <DevicePhoneMobileIcon className="w-7 h-7 text-secondary" />
                        Yondr Pouch System
                      </h4>

                      <div className="space-y-4">
                        {[
                          "Upon arrival, students must power off their devices.",
                          "Lexington Academy will provide students with locked pouches (Yondr pouches).",
                          "Students will place their powered off devices in their Yondr pouches and secure it in front of school staff upon arrival.",
                          "Students will store their locked pouches in their backpacks for the day.",
                          "At the end of the school day, students will unlock their pouch near the exit doors, using the unlocking mechanisms provided by staff.",
                          "Students with approved early dismissal will be able to unlock their pouch with the safety agent at the front desk or in the main office when they sign out."
                        ].map((rule, i) => (
                          <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm font-medium text-white/90">{rule}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-bold text-amber-700">Pouch Replacement:</span> In the event that a storage device, such as a pouch, is lost or damaged, the school will provide a new pouch at no charge for the first time. If the second pouch is lost or damaged, students will be required to pay a nominal fee for a replacement.
                    </p>
                  </div>
                </div>

                {/* Emergency Communications */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <PhoneIcon className="w-7 h-7 text-primary" />
                    2. Emergency Communications
                  </h3>

                  <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
                    <p className="text-gray-700 font-medium mb-6">In case of emergency or exigent circumstances:</p>

                    <div className="space-y-4">
                      <div className="bg-white p-6 rounded-xl border border-blue-200">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <PhoneIcon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 mb-1">Parents/Guardians Can Call</p>
                            <a href="tel:212-860-5831" className="text-2xl font-bold text-primary hover:text-secondary transition-colors">
                              212-860-5831
                            </a>
                            <p className="text-sm text-gray-600 mt-2">Main office to reach their child</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-xl border border-blue-200">
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          <span className="font-semibold">Student Access:</span> Students may have their pouches unlocked to access their phones (when it is safe to do so) in order to reach their parents or guardians.
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-xl border border-blue-200">
                        <p className="text-gray-700 text-sm leading-relaxed">
                          <span className="font-semibold">School Communications:</span> The school will use robocalls through the DOE system OASIS to communicate information to parents or guardians. Parents/guardians should ensure that the school has their most up-to-date phone numbers in order to receive automated messages and a working voicemail system that can receive messages.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exceptions */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <UserGroupIcon className="w-7 h-7 text-primary" />
                    3. Exceptions
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-teal-50 p-6 rounded-2xl border-2 border-teal-200">
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircleIcon className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-gray-900 mb-2">IEP/504 Plan Exception</p>
                          <p className="text-sm text-gray-700">
                            Students are allowed to use their device if they have an individualized education program (IEP) or 504 Plan that includes use of an internet-enabled device and do not have a DOE-issued device for such purpose.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-200">
                      <p className="font-bold text-gray-900 mb-3">Contact for Exception Requests:</p>
                      <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                          <PhoneIcon className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Ms. Paola - Parent Coordinator</p>
                          <a href="tel:929-549-3250" className="text-lg font-bold text-primary hover:text-secondary transition-colors">
                            929-549-3250
                          </a>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2 text-sm text-gray-700">
                        <p className="font-semibold text-gray-900 mb-2">Exception reasons include:</p>
                        <ul className="space-y-1 ml-4">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Medical monitoring/treatment (e.g., blood sugar monitoring)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Student is a caregiver</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Approved language purposes (translation/interpretation if no other means available)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Where otherwise required by law</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Educational Use:</span> The principal/designee may authorize use for an educational purpose. Exceptions will be processed and approved at the principal's discretion.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Discipline */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <ExclamationTriangleIcon className="w-7 h-7 text-secondary" />
                    4. Discipline
                  </h3>

                  <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Students who use electronic devices in violation of the NYCPS Discipline Code, the school's policy, Chancellor's Regulation A-413, and/or the NYCPS Internet Acceptable Use and Safety Policy ("IAUSP") will be subject to progressive discipline. This means that the disciplinary responses will escalate based on the nature and frequency of the violation.
                    </p>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-6">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-bold text-amber-700">Important:</span> As provided in State law, a student may not be suspended solely on the grounds that the student accessed a personal internet-enabled device in violation of school policy. Repeated incidents of insubordination (i.e., refusal to surrender or store a device) may result in a suspension if approved by the Office of Safety and Youth Development.
                    </p>
                  </div>
                </div>

                {/* Lost or Stolen */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <ShieldExclamationIcon className="w-7 h-7 text-primary" />
                    5. If Lost or Stolen
                  </h3>

                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      In the unlikely event that an electronic device is stolen or damaged at school, parents can submit a claim to the Comptroller's Office. More information on submitting a claim is available on the <a href="https://comptroller.nyc.gov/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-secondary transition-colors">Comptroller's webpage</a>.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact & Support Card */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Questions or Clarification?</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We appreciate your cooperation in helping us maintain a focused and productive learning environment. If you have any questions or need further clarification regarding these policies, please do not hesitate to contact:
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <PhoneIcon className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg mb-1">Ms. Brianna Hawkins</p>
                    <p className="text-gray-600 mb-2">Community Coordinator</p>
                    <a href="tel:212-860-5831" className="text-xl font-bold text-primary hover:text-secondary transition-colors">
                      212-860-5831
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* NYC Schools Account CTA */}
            <div className="bg-gradient-to-br from-primary to-navy-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Stay Connected with Your Child's Education!</h3>
                <p className="text-xl text-white/90 leading-relaxed mb-6">
                  We encourage all families to sign up for a NYC Schools Account—your one-stop portal for tracking your child's progress from Pre-K through high school.
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    With an account, you can monitor grades, test scores, and attendance, and access exclusive digital resources for NYC public school families. You'll also receive important updates about school closures, emergencies, and events.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <a
                    href="https://www.schoolsaccount.nyc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2"
                  >
                    Create Your Account Today
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <div className="text-white/80 text-sm">
                    <p className="font-semibold mb-1">Need help setting up?</p>
                    <p>Contact Paola Jose at <a href="mailto:djosedeabreu@schools.nyc.gov" className="text-secondary font-semibold hover:text-orange-300 transition-colors">djosedeabreu@schools.nyc.gov</a></p>
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

export default CellPhonePolicyPage;

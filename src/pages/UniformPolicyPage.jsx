import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ShoppingBagIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

const UniformPolicyPage = () => {
  const uniformItems = [
    {
      grade: 'Elementary School (Grades 3K-5)',
      color: 'White blouse or shirt with school logo',
      bottomsColor: 'Navy Blue',
      bottoms: 'Pants/Skirts',
      bgColor: 'bg-blue-50',
      textColor: 'text-primary',
      accentColor: 'border-primary'
    },
    {
      grade: 'Middle School (Grades 6-8)',
      color: 'Sky blue blouse or shirt with school logo',
      bottomsColor: 'Black',
      bottoms: 'Pants/Skirts',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-700',
      accentColor: 'border-gray-400'
    }
  ];

  const footwearRules = {
    permitted: 'Regular shoes or sneakers in any color',
    notPermitted: ['Flip flops', 'Crocs', 'Open-toe shoes', 'Backless/slingless shoes']
  };

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
               <ShoppingBagIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Uniform <span className="font-semibold text-secondary">Policy</span>
            </h1>
            <p className="text-xl text-white/90 font-light mb-3">
              Academic School Year 2025-2026
            </p>
            <p className="text-sm text-white/70 font-light">
              Promoting Excellence & School Unity
            </p>
          </div>
        </section>

        {/* ============================================================================
            POLICY CONTENT
        ============================================================================ */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
          <div className="max-w-6xl mx-auto">

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8">

              {/* Left Column - Uniform Requirements */}
              <div className="lg:col-span-2 space-y-8">

                {/* Background & Purpose Section */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-navy-900 p-8">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                      <InformationCircleIcon className="w-8 h-8 text-secondary" />
                      Background & Purpose of Uniform
                    </h2>
                  </div>

                  <div className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      In keeping with <span className="font-semibold text-primary">Chancellor's Regulation A-655</span>, The Lexington Academy is one of many NYC schools that have adopted school uniforms. Our school uniform policy fully supports Chancellor's Regulation A-655 in that it helps:
                    </p>

                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                      <ul className="space-y-3 text-sm text-gray-700">
                        <li className="flex items-start gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Schools promote a more effective learning climate</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Foster school unity and pride</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Improve student performance and foster self-esteem</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Eliminate label competition and minimize costs to parents</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Teach children appropriate dress and decorum in their "work" place</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Help to improve student conduct and discipline</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-secondary rounded-lg p-6 mt-6">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <span className="font-bold text-gray-900">Important:</span> We expect Lexington Academy students to be dressed appropriately to ensure safety and stay focused on learning. We ask that parents/guardians ensure that students come to school with the appropriate uniform each and every day. <span className="font-semibold">Students must be in full uniform to attend classes and remain in full uniform throughout the day.</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Uniform Items Card */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="bg-gray-50 border-b border-gray-100 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                      <CheckCircleIcon className="w-8 h-8 text-secondary" />
                      Definition and Description of Uniform
                    </h2>
                  </div>

                  <div className="p-8 space-y-6">
                    {uniformItems.map((item, index) => (
                      <div key={index} className={`p-6 rounded-2xl border-2 ${item.bgColor} ${item.accentColor} hover:shadow-lg transition-all duration-300`}>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                              <div className={`w-10 h-10 rounded-full bg-white border-2 ${item.accentColor} flex items-center justify-center`}>
                                <span className="font-bold text-lg">{index === 0 ? '3K-5' : '6-8'}</span>
                              </div>
                              <h3 className="font-bold text-gray-900 text-lg">{item.grade}</h3>
                            </div>

                            <div className="space-y-3">
                              <div className="flex items-start gap-2">
                                <span className="font-semibold text-gray-700 min-w-[80px]">Top:</span>
                                <span className="text-gray-600">{item.color}</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <span className="font-semibold text-gray-700 min-w-[80px]">Bottoms:</span>
                                <span className="text-gray-600">{item.bottomsColor} {item.bottoms}</span>
                              </div>
                            </div>

                            <div className="bg-white rounded-lg p-3 mt-4 border border-gray-200">
                              <p className="text-sm text-gray-600 flex items-center gap-2">
                                <GlobeAltIcon className="w-4 h-4 text-primary" />
                                Order online at <a href="https://www.smoothusa.com/lexingtonacademy" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-secondary transition-colors">smoothusa.com/lexingtonacademy</a>
                              </p>
                            </div>
                          </div>
                          <div className={`w-16 h-16 rounded-full ${item.bgColor} border-2 ${item.accentColor} flex items-center justify-center flex-shrink-0`}>
                            <ShoppingBagIcon className={`w-7 h-7 ${item.textColor}`} />
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Special Note for Seniors */}
                    <div className="bg-secondary/10 border-2 border-secondary/30 rounded-2xl p-6">
                      <div className="flex items-start gap-3">
                        <InformationCircleIcon className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-gray-900 mb-1">Special Note for Seniors</p>
                          <p className="text-sm text-gray-700">Seniors ONLY may wear High School hoodies.</p>
                        </div>
                      </div>
                    </div>

                    {/* Important Notice - No Jeans */}
                    <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                      <p className="text-sm text-gray-700 flex items-center gap-2">
                        <ExclamationTriangleIcon className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span><span className="font-bold text-red-700">Important:</span> Jeans are NOT part of the uniform policy.</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footwear Section */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="bg-gray-50 border-b border-gray-100 p-8">
                    <h2 className="text-2xl font-bold text-gray-900">Footwear Policy</h2>
                  </div>

                  <div className="p-8 space-y-6">
                    {/* Permitted */}
                    <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
                      <div className="flex items-start gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Permitted Footwear</h4>
                          <p className="text-gray-700">{footwearRules.permitted}</p>
                        </div>
                      </div>
                    </div>

                    {/* Not Permitted */}
                    <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200">
                      <div className="flex items-start gap-3">
                        <ExclamationTriangleIcon className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-3">Not Permitted (For Safety Purposes)</h4>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {footwearRules.notPermitted.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-lg">
                                <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                                <span className="text-sm text-gray-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Online Ordering Card */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <ShoppingBagIcon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Easy Online Ordering</h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Ordering uniforms for The Lexington Academy is simple and convenient. Visit our online store to browse available items and place your order.
                  </p>

                  <a
                    href="https://www.smoothusa.com/lexingtonacademy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <GlobeAltIcon className="w-5 h-5" />
                    Order Uniforms Online
                  </a>
                </div>

              </div>

              {/* Right Column - Contact & PDF */}
              <div className="lg:col-span-1 space-y-8">

                {/* Contact Card */}
                <div className="bg-primary text-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <EnvelopeIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold">Questions?</h3>
                    </div>

                    <p className="text-white/80 mb-6 leading-relaxed">
                      We appreciate your cooperation in helping us maintain a focused and productive learning environment. If you have any questions or need further clarification regarding these policies, please do not hesitate to contact:
                    </p>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-6">
                      <p className="font-bold text-lg mb-2">Ms. Brianna Hawkins</p>
                      <p className="text-white/70 text-sm mb-3">Community Coordinator</p>
                      <a
                        href="tel:212-860-5831"
                        className="text-secondary hover:text-orange-300 transition-colors font-bold text-xl"
                      >
                        212-860-5831
                      </a>
                    </div>

                    <p className="text-sm text-white/60">
                      We're here to help ensure every student has access to the required uniform items.
                    </p>
                  </div>
                </div>

                {/* Info Note */}
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    <span className="font-bold text-primary">Important:</span> All students are required to wear the appropriate uniform items during school hours. Uniforms help create a sense of unity and pride in our school community.
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    One method for our school to reach excellence is to ensure that all students come to school dressed for success every day.
                  </p>
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

export default UniformPolicyPage;

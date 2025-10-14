import React from 'react';
import Navbar from '../components/Navbar';

// ============================================================================
// ICON COMPONENTS (Inline SVG)
// ============================================================================

const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BookIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const AwardIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TargetIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

// ============================================================================
// MAIN HOMEPAGE COMPONENT
// ============================================================================

const HomePage = () => {
  // Scraped data from https://psms72lexingtonacademy.net/
  const schoolData = {
    name: 'The Lexington Academy',
    tagline: 'Home of the Lions',
    address: '131 East 104 St, Manhattan, NY 10029',
    phone: '212-860-5831',
    fax: '212-860-6094',
    mission: 'The Lexington Academy seeks to maintain an educational environment in which the entire school community, in partnership with community based organizations and families, works to ensure that all students are provided with the skills to become lifelong learners.',

    news: [
      {
        id: 1,
        title: 'Welcome Back to School September 4, 2025',
        excerpt: 'Resources Page - On Thursday, September 4, 2025, we will welcome students back for an exciting new school year.',
        date: 'September 2025',
        link: '/news/welcome-back-2025',
      },
      {
        id: 2,
        title: 'Distraction-Free Learning in Schools',
        excerpt: 'Cell Phone and Electronic Device Policy updates for the 2024-2025 school year.',
        date: 'August 2025',
        link: '/news/distraction-free-learning',
      },
      {
        id: 3,
        title: 'Free Summer Meals',
        excerpt: 'Find a location near you! June 27 - August 29',
        date: 'June 2025',
        link: '/news/free-summer-meals',
      },
    ],

    events: [
      {
        id: 1,
        title: 'Italian Heritage/Indigenous Peoples\' Day',
        date: 'Oct 13-14',
        month: 'OCT',
        day: '13',
        description: 'Schools closed',
      },
      {
        id: 2,
        title: 'Diwali',
        date: 'Oct 20-21',
        month: 'OCT',
        day: '20',
        description: 'Schools closed',
      },
    ],

    quickLinks: [
      { name: 'Calendar', icon: <CalendarIcon />, href: '/calendars' },
      { name: 'Parent Portal', icon: <UserIcon />, href: '/parent-portal' },
      { name: 'Staff Directory', icon: <UserIcon />, href: '/staff-directory' },
      { name: 'Uniform Policy', icon: <ShieldIcon />, href: '/uniform-policy' },
      { name: 'Cell Phone Policy', icon: <PhoneIcon />, href: '/cell-phone-policy' },
      { name: 'Handbook', icon: <BookIcon />, href: '/handbook' },
      { name: 'Mental Health', icon: <HeartIcon />, href: '/mental-health-resources' },
      { name: 'Contact', icon: <MapPinIcon />, href: '/contact' },
    ],

    stats: [
      { label: 'Students', value: '450+', temp: true },
      { label: 'Faculty', value: '35+', temp: true },
      { label: 'Attendance', value: '95%', temp: true },
      { label: 'Years Serving', value: '20+', temp: true },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main id="main-content">
        {/* ================================================================ */}
        {/* HERO SECTION */}
        {/* ================================================================ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-hero z-10" />
            <img
              src="https://i0.wp.com/psms72lexingtonacademy.net/wp-content/uploads/2023/12/DJI_0591-scaled.jpg?fit=2560%2C1440&ssl=1"
              alt="The Lexington Academy building aerial view"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Content */}
          <div className="relative z-20 text-center px-4 max-w-5xl mx-auto py-32">
            <div className="mb-8 flex justify-center">
              <div className="w-28 h-28 bg-white rounded-full shadow-2xl flex items-center justify-center ring-4 ring-white/30">
                <span className="text-primary font-bold text-5xl">L</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Welcome to<br />The Lexington Academy
            </h1>

            <p className="text-2xl md:text-3xl text-white font-semibold mb-4">
              {schoolData.tagline}
            </p>

            <p className="text-lg md:text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed">
              A rigorous, supportive learning environment where students develop the skills and character
              to become <span className="text-accent-yellow font-semibold">lifelong learners</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/mission-statement"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-primary bg-white rounded-full shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-150 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
              >
                Our Mission
                <ArrowRightIcon />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white bg-secondary rounded-full shadow-2xl hover:bg-orange-600 hover:scale-105 transition-all duration-150 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* QUICK ACCESS ROW */}
        {/* ================================================================ */}
        <section className="py-8 bg-white shadow-md relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {schoolData.quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-navy-700 bg-gray-50 border-2 border-gray-200 rounded-full hover:bg-accent-light hover:border-secondary hover:text-secondary transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary shadow-sm hover:shadow-md"
                >
                  <span className="text-secondary">{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* ABOUT / MISSION SECTION */}
        {/* ================================================================ */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div className="order-2 lg:order-1">
                <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-4">
                  OUR MISSION
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight leading-tight">
                  Building Future Leaders
                </h2>
                <div className="text-lg text-gray-700 mb-8 leading-relaxed space-y-4">
                  <p>
                    {schoolData.mission}
                  </p>
                  <p>
                    Through collaboration and standards-driven instructional curriculum, we engage all students
                    and assist them in achieving high standards.
                  </p>
                </div>

                <a
                  href="/mission-statement"
                  className="inline-flex items-center gap-2 text-secondary font-bold text-lg hover:gap-3 transition-all duration-150 focus:outline-none focus-visible:underline"
                >
                  Read our full mission
                  <ArrowRightIcon />
                </a>
              </div>

              {/* Image/Stats */}
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-primary to-navy-800 rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    {schoolData.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/20"
                        data-temp={stat.temp || undefined}
                      >
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                          {stat.value}
                        </div>
                        <div className="text-sm text-white/90 font-semibold uppercase tracking-wide">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* VALUES SECTION */}
        {/* ================================================================ */}
        <section className="py-20 bg-gradient-to-br from-accent-light to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-4">
                OUR CORE VALUES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
                Excellence in Education
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                We are committed to developing well-rounded students who excel academically and contribute
                positively to their communities
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Academic Excellence */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-150 border-t-4 border-primary">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <BookIcon />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Academic Excellence
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Rigorous curriculum and high standards prepare students for success in high school and beyond.
                </p>
              </div>

              {/* Community */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-150 border-t-4 border-secondary">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <UsersIcon />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Supportive Community
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A nurturing environment where students, families, and staff work together toward shared goals.
                </p>
              </div>

              {/* Character */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-150 border-t-4 border-accent-yellow">
                <div className="w-14 h-14 bg-accent-yellow/10 rounded-xl flex items-center justify-center mb-6">
                  <AwardIcon />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Character Development
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Building integrity, responsibility, and leadership skills that extend beyond the classroom.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* NEWS & ANNOUNCEMENTS */}
        {/* ================================================================ */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-4">
                  STAY INFORMED
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight">
                  News & Announcements
                </h2>
              </div>
              <a
                href="/news"
                className="hidden md:inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all duration-150 focus:outline-none focus-visible:underline"
              >
                View all
                <ArrowRightIcon />
              </a>
            </div>

            {schoolData.news.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-8">
                {schoolData.news.map((article) => (
                  <article
                    key={article.id}
                    className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-150"
                  >
                    <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
                    <div className="p-6">
                      <div className="text-sm text-secondary font-bold mb-3 uppercase tracking-wide">
                        {article.date}
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-150 leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <a
                        href={article.link}
                        className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all duration-150"
                      >
                        Read more
                        <ArrowRightIcon />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                <p className="text-gray-600">No announcements at this time. Check back soon!</p>
              </div>
            )}
          </div>
        </section>

        {/* ================================================================ */}
        {/* UPCOMING EVENTS */}
        {/* ================================================================ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-4">
                  CALENDAR
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight">
                  Upcoming Events
                </h2>
              </div>
              <a
                href="/calendars"
                className="hidden md:inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all duration-150"
              >
                View calendar
                <ArrowRightIcon />
              </a>
            </div>

            {schoolData.events.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                {schoolData.events.map((event) => (
                  <div
                    key={event.id}
                    className="flex gap-6 bg-white rounded-2xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition-shadow duration-150"
                  >
                    {/* Date Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-navy-700 rounded-xl flex flex-col items-center justify-center text-white shadow-lg">
                        <div className="text-xs font-bold uppercase tracking-wide opacity-90">
                          {event.month}
                        </div>
                        <div className="text-3xl font-bold">
                          {event.day}
                        </div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-primary mb-1">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2 font-medium">
                        {event.date}
                      </p>
                      <p className="text-sm text-gray-700">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ================================================================ */}
        {/* COMMUNITY INVITE BANNER */}
        {/* ================================================================ */}
        <section className="py-24 bg-gradient-to-br from-primary via-navy-700 to-navy-900 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-yellow rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              You Belong Here
            </h2>
            <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed">
              Join our vibrant learning community where every student is <span className="text-accent-yellow font-semibold">valued, challenged</span>, and <span className="text-accent-yellow font-semibold">supported</span> to reach their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/principals-message"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-primary bg-white rounded-full shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-150"
              >
                Principal's Message
                <ArrowRightIcon />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-full hover:bg-white/10 transition-all duration-150"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* FOOTER */}
        {/* ================================================================ */}
        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Logo & Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-primary font-bold text-2xl">L</span>
                  </div>
                  <div>
                    <div className="font-bold text-white text-xl">
                      The Lexington Academy
                    </div>
                    <div className="text-sm text-white/80">
                      Home of the Lions
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-white/90">
                  <div className="flex items-start gap-2">
                    <MapPinIcon />
                    <span>{schoolData.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneIcon />
                    <span>Phone: {schoolData.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneIcon />
                    <span>Fax: {schoolData.fax}</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-bold text-white mb-4 text-lg">Quick Links</h3>
                <ul className="space-y-2 text-sm text-white/90">
                  <li><a href="/mission-statement" className="hover:text-accent-yellow transition-colors duration-150">Mission Statement</a></li>
                  <li><a href="/principals-message" className="hover:text-accent-yellow transition-colors duration-150">Principal's Message</a></li>
                  <li><a href="/staff-directory" className="hover:text-accent-yellow transition-colors duration-150">Staff Directory</a></li>
                  <li><a href="/calendars" className="hover:text-accent-yellow transition-colors duration-150">Calendars</a></li>
                  <li><a href="/news" className="hover:text-accent-yellow transition-colors duration-150">News</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-bold text-white mb-4 text-lg">Resources</h3>
                <ul className="space-y-2 text-sm text-white/90">
                  <li><a href="/cell-phone-policy" className="hover:text-accent-yellow transition-colors duration-150">Cell Phone Policy</a></li>
                  <li><a href="/handbook" className="hover:text-accent-yellow transition-colors duration-150">Parent/Student Handbook</a></li>
                  <li><a href="/mental-health-resources" className="hover:text-accent-yellow transition-colors duration-150">Mental Health Resources</a></li>
                  <li><a href="https://www.schools.nyc.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-yellow transition-colors duration-150">NYC Public Schools</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
              <div>
                © 2024 PSMS72 The Lexington Academy. All rights reserved.
              </div>
              <div className="flex items-center gap-6">
                <a href="/web-accessibility-statement" className="hover:text-accent-yellow transition-colors duration-150">
                  Web Accessibility
                </a>
                <a href="https://get.adobe.com/reader/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-yellow transition-colors duration-150">
                  Adobe Reader
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;

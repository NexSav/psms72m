import React, { useState, useEffect } from 'react';

// Icon Components (Inline SVG)
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const Navbar = () => {
  const [isSolid, setIsSolid] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
      submenu: [
        { name: 'Administrative Team', href: '/administrative-team' },
        { name: 'Mission Statement', href: '/mission-statement' },
        { name: "Principal's Message", href: '/principals-message' },
        { name: 'Staff Directory', href: '/staff-directory' },
        { name: 'NYCPS District Links', href: '/nycps-district-links' },
        {
          name: 'School Quality Snapshot',
          href: 'https://tools.nycenet.edu/snapshot/2022/04M072/EMS/?utm_source=schools.nyc.gov&utm_medium=Public_Page&utm_campaign=School_Page',
          external: true
        },
        {
          name: 'School Performance Dashboard',
          href: 'https://tools.nycenet.edu/dashboard/?utm_source=schools.nyc.gov&utm_medium=Public_Page&utm_campaign=School_Page#dbn=04M072&report_type=EMS&view=City',
          external: true
        },
      ]
    },
    {
      name: 'Policies/Procedures',
      href: '/policies-procedures',
      submenu: [
        { name: 'Cell Phone Policy', href: '/cell-phone-policy' },
        { name: 'Parent/Student Handbook', href: '/handbook' },
        { name: 'Uniform Policy', href: '/uniform-policy' },
      ]
    },
    {
      name: 'Students',
      href: '/students',
      submenu: [
        { name: 'Mental Health Resources', href: '/mental-health-resources' },
      ]
    },
    {
      name: 'Parents',
      href: '/parents',
      submenu: [
        {
          name: 'Get Involved',
          href: 'https://www.schools.nyc.gov/get-involved/families',
          external: true
        },
        { name: 'Mental Health Resources', href: '/mental-health-resources' },
      ]
    },
    {
      name: 'Calendars',
      href: '/calendars',
      submenu: [
        { name: 'Monthly Activities Calendar', href: '/monthly-activities-calendar' },
        { name: '2024-2025 School Year Calendar', href: '/school-year-calendar' },
      ]
    },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-primary focus:rounded-lg focus:shadow-lg"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-[1400px] px-4">
        <nav
          className={`relative mt-4 rounded-2xl backdrop-blur transition-all duration-200 ease-out ${
            isSolid
              ? 'bg-white shadow-lg'
              : 'bg-white/95 shadow-md'
          }`}
          aria-label="Primary navigation"
        >
          {/* Curved bottom edge SVG - visible when solid */}
          {isSolid && (
            <svg
              className="absolute -bottom-3 left-0 w-full h-6 pointer-events-none"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0,0 H100 V6 Q50,10 0,6 Z" fill="white" />
            </svg>
          )}

          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo & Name */}
            <a
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-navy-700 rounded-full flex items-center justify-center transition-transform duration-150 group-hover:scale-110 shadow-md">
                <span className="text-white font-bold text-xl" aria-label="Lions">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-primary text-lg tracking-tight leading-tight">
                  The Lexington Academy
                </span>
                <span className="text-xs text-gray-600 font-medium">Home of the Lions</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <a
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2.5 text-sm font-semibold text-navy-700 hover:text-secondary transition-colors duration-150 rounded-lg hover:bg-orange-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                  >
                    {link.name}
                    {link.submenu && <ChevronDownIcon />}
                  </a>

                  {/* Dropdown Menu */}
                  {link.submenu && (
                    <div className="absolute top-full left-0 mt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 ease-out">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 mt-1">
                        {link.submenu.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-accent-light hover:text-primary transition-colors duration-150 border-l-2 border-transparent hover:border-secondary"
                            {...(item.external && {
                              target: '_blank',
                              rel: 'noopener noreferrer'
                            })}
                          >
                            {item.name}
                            {item.external && (
                              <svg className="inline-block w-3 h-3 ml-1 opacity-60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA & Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <a
                href="/contact"
                className="hidden sm:inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-secondary to-orange-600 rounded-full hover:from-orange-600 hover:to-secondary transition-all duration-150 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
              >
                Contact Us
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-primary hover:text-secondary hover:bg-orange-50 rounded-lg transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 bg-gray-50">
              <div className="px-4 py-3 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <a
                      href={link.href}
                      className="block px-4 py-2.5 text-sm font-semibold text-primary hover:text-secondary hover:bg-white rounded-lg transition-colors duration-150"
                    >
                      {link.name}
                    </a>
                    {link.submenu && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.submenu.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-secondary hover:bg-white rounded-lg transition-colors duration-150"
                            {...(item.external && {
                              target: '_blank',
                              rel: 'noopener noreferrer'
                            })}
                          >
                            {item.name}
                            {item.external && (
                              <svg className="inline-block w-3 h-3 ml-1 opacity-60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a
                  href="/contact"
                  className="block px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-secondary to-orange-600 rounded-lg hover:from-orange-600 hover:to-secondary transition-all duration-150 text-center mt-3 shadow-md"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

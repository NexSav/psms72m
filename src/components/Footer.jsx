import React from 'react';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const schoolData = {
    name: 'The Lexington Academy',
    tagline: 'Home of the Lions',
    address: '131 East 104 St, Manhattan, NY 10029',
    phone: '212-860-5831',
    fax: '212-860-6094'
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <img src="/assets/images/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-lg">The Lexington Academy</h3>
                <p className="text-gray-400 text-sm">PS/MS 72M</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students to become lifelong learners through academic excellence and character development.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="/about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="/staff-directory" className="hover:text-secondary transition-colors">Staff Directory</a></li>
              <li><a href="/calendars" className="hover:text-secondary transition-colors">Calendars</a></li>
              <li><a href="/contact" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="/parent-portal" className="hover:text-secondary transition-colors">Parent Portal</a></li>
              <li><a href="/handbook" className="hover:text-secondary transition-colors">Student Handbook</a></li>
              <li><a href="/cell-phone-policy" className="hover:text-secondary transition-colors">School Policies</a></li>
              <li><a href="/mental-health-resources" className="hover:text-secondary transition-colors">Wellness</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>{schoolData.address.split(',').map((part, i) => <span key={i} className="block">{part.trim()}</span>)}</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>{schoolData.phone}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} The Lexington Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/accessibility" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


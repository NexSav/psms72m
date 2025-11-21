import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  UserGroupIcon, 
  CalendarDaysIcon,
  BookOpenIcon,
  DocumentTextIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  HeartIcon,
  AcademicCapIcon,
  TrophyIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // School data for The Lexington Academy
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
        title: 'Welcome Back to School',
        category: 'Announcement',
        excerpt: 'We are thrilled to welcome students back for an exciting new school year filled with learning and growth.',
        date: 'Sep 4',
        link: '/news/welcome-back-2025',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 2,
        title: 'Device Free Learning',
        category: 'Policy Update',
        excerpt: 'New distraction-free learning policies are in effect for the 2025-2026 academic year to enhance student focus.',
        date: 'Aug 28',
        link: '/cell-phone-policy',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 3,
        title: 'Summer Meals Program',
        category: 'Community',
        excerpt: 'Free nutritious meals are available for all students throughout the summer at designated locations.',
        date: 'Jun 15',
        link: '/news/free-summer-meals',
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800'
      },
    ],

    events: [
      {
        id: 1,
        title: 'Italian Heritage Day',
        date: 'Oct 13',
        month: 'OCT',
        day: '13',
        description: 'Schools closed for observance',
        time: 'All Day'
      },
      {
        id: 2,
        title: 'Diwali Observation',
        date: 'Oct 20',
        month: 'OCT',
        day: '20',
        description: 'Schools closed for observance',
        time: 'All Day'
      },
      {
        id: 3,
        title: 'Parent Teacher Conference',
        date: 'Nov 04',
        month: 'NOV',
        day: '04',
        description: 'Evening sessions available',
        time: '4:30 PM'
      },
    ],

    stats: [
      { label: 'Students Enrolled', value: '450+', icon: UserGroupIcon },
      { label: 'Dedicated Faculty', value: '35+', icon: AcademicCapIcon },
      { label: 'Attendance Rate', value: '95%', icon: SparklesIcon },
      { label: 'Years of Excellence', value: '20+', icon: TrophyIcon },
    ],
  };

  return (
    <main className="bg-gray-50 selection:bg-secondary selection:text-white font-sans">
      <Navbar />

      {/* ============================================================================
          HERO SECTION - Immersive & Sleek
      ============================================================================ */}
      <section className="relative h-screen min-h-[800px] overflow-hidden">
        {/* Video Background with Parallax Effect */}
        <div 
          className="absolute inset-0 transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover scale-105"
            poster="https://i0.wp.com/psms72lexingtonacademy.net/wp-content/uploads/2023/12/DJI_0591-scaled.jpg?fit=2560%2C1440&ssl=1"
          >
            <source src="/assets/videos/home/Lexington Academy.mp4" type="video/mp4" />
            <img 
              src="https://i0.wp.com/psms72lexingtonacademy.net/wp-content/uploads/2023/12/DJI_0591-scaled.jpg?fit=2560%2C1440&ssl=1"
              alt="The Lexington Academy Building" 
              className="w-full h-full object-cover"
            />
          </video>
          {/* Sophisticated Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/10 to-primary/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-end pb-24 sm:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl animate-fade-in-up">
              <div className="mb-8 overflow-hidden">
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 text-sm font-medium uppercase tracking-widest rounded-full shadow-lg hover:bg-white/20 transition-colors duration-300 cursor-default">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  Welcome to The Lexington Academy
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-9xl font-light text-white mb-8 tracking-tight leading-[0.9]">
                PS/MS 72M
              </h1>

              <div className="mb-10">
                <h2 className="text-3xl md:text-5xl text-white font-light mb-3 tracking-tight leading-tight">
                  The Lexington Academy
                </h2>
                <h3 className="text-xl md:text-2xl text-secondary font-semibold tracking-wider uppercase mb-8">
                  Home of the Lions
                </h3>
                <div className="h-px w-20 bg-secondary/60 mb-6"></div>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed font-light">
                  Cultivating intellect, character, and community in the heart of East Harlem. A place where every student rises to their full potential.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#about" className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(244,101,36,0.3)] hover:shadow-[0_0_30px_rgba(244,101,36,0.5)] hover:-translate-y-1 flex items-center gap-2 group">
                  Discover Our School
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-white/50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ============================================================================
          QUICK ACCESS - Bento Grid Style
      ============================================================================ */}
      <section className="relative py-20 -mt-10 z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {[
            { icon: BookOpenIcon, title: "Handbook", href: "/handbook", color: "secondary" },
            { icon: UserGroupIcon, title: "Parent Portal", href: "/parent-portal", color: "primary" },
            { icon: DocumentTextIcon, title: "Policies", href: "/cell-phone-policy", color: "secondary" },
            { icon: CalendarDaysIcon, title: "Calendar", href: "/calendars", color: "primary" },
            { icon: ShieldCheckIcon, title: "Uniforms", href: "/uniform-policy", color: "secondary" },
            { icon: HeartIcon, title: "Wellness", href: "/mental-health-resources", color: "primary" },
            { icon: UserGroupIcon, title: "Directory", href: "/staff-directory", color: "secondary" },
            { icon: MapPinIcon, title: "Contact", href: "/contact", color: "primary" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center text-center gap-3 aspect-square"
            >
              <div className={`p-3 rounded-xl bg-${item.color === 'primary' ? 'blue' : 'orange'}-50 text-${item.color} group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">
                {item.title}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ============================================================================
          ABOUT SECTION - Asymmetric Layout
      ============================================================================ */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-32 opacity-50 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Content */}
            <div className="space-y-10">
              <div>
                <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-2 block">About Us</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary tracking-tight leading-tight">
                  Building Future <br/>
                  <span className="font-semibold relative">
                    Leaders
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none"/></svg>
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  The Lexington Academy is more than just a school; it's a vibrant community hub in East Harlem. We believe in the power of partnership between educators, families, and community organizations to create a nurturing environment.
                </p>
                <p>
                  Our rigorous, standards-driven curriculum is designed to challenge students while providing the support they need to thrive. We don't just teach subjects; we foster character, creativity, and critical thinking.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                 <div className="p-4 border-l-4 border-primary bg-gray-50/50">
                   <h4 className="font-bold text-primary text-lg mb-1">Mission</h4>
                   <p className="text-sm text-gray-600 leading-relaxed">Empowering students with skills to become lifelong learners through community partnership.</p>
                 </div>
                 <div className="p-4 border-l-4 border-secondary bg-gray-50/50">
                   <h4 className="font-bold text-secondary text-lg mb-1">Vision</h4>
                   <p className="text-sm text-gray-600 leading-relaxed">Creating a safe, inclusive environment where academic excellence meets character development.</p>
                 </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="/mission-statement" className="text-primary font-semibold border-b-2 border-primary/20 hover:border-primary transition-colors pb-1">
                  Read our full mission
                </a>
              </div>
            </div>

            {/* Modern Stats Grid */}
            <div className="grid grid-cols-2 gap-4 relative">
              {schoolData.stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`p-8 rounded-3xl ${index === 0 ? 'bg-primary text-white col-span-2' : 'bg-gray-50 text-gray-900'} ${index === 2 ? 'bg-secondary text-white' : ''} hover:-translate-y-1 transition-transform duration-500 shadow-lg hover:shadow-xl flex flex-col justify-between min-h-[180px]`}
                >
                  <stat.icon className={`w-10 h-10 ${index === 0 || index === 2 ? 'text-white/80' : 'text-primary'} mb-4`} />
                  <div>
                    <div className={`text-4xl md:text-5xl font-bold tracking-tight ${index === 0 || index === 2 ? 'text-white' : 'text-primary'} mb-1`}>
                      {stat.value}
                    </div>
                    <div className={`text-sm font-medium uppercase tracking-wider ${index === 0 || index === 2 ? 'text-white/70' : 'text-gray-500'}`}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Decorative Circle */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gray-100 rounded-full opacity-50 animate-spin-slow pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          NEWS & UPDATES - Magazine Layout
      ============================================================================ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-2 block">Happening Now</span>
              <h2 className="text-4xl font-light text-gray-900 tracking-tight">Latest News & Updates</h2>
            </div>
            <a href="/news" className="group flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
              View all news
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {schoolData.news.map((item) => (
              <article key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider shadow-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="text-sm text-gray-400 font-medium mb-3">{item.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                    <a href={item.link}>
                      <span className="absolute inset-0"></span>
                      {item.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center text-secondary text-sm font-semibold group-hover:gap-2 transition-all">
                    Read Story <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================================
          EVENTS & COMMUNITY - Split Feature
      ============================================================================ */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Events Column */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-10">
                <div className="p-3 rounded-xl bg-primary/5 text-primary">
                  <CalendarDaysIcon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-light text-gray-900 tracking-tight">Upcoming Events</h2>
              </div>

              <div className="space-y-6">
                {schoolData.events.map((event) => (
                  <div key={event.id} className="group flex gap-6 p-6 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-20 h-20 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <span className="text-xs font-bold uppercase tracking-wider opacity-60">{event.month}</span>
                      <span className="text-3xl font-bold tracking-tighter">{event.day}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{event.title}</h3>
                      <p className="text-gray-500 text-sm mb-2">{event.description}</p>
                      <span className="inline-flex items-center text-xs font-medium bg-gray-200 text-gray-700 px-2.5 py-1 rounded-full">
                        {event.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                 <a href="/calendars" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors w-full sm:w-auto">
                   View Full Calendar
                 </a>
              </div>
            </div>

            {/* Community/Contact Column */}
            <div className="lg:col-span-5">
               <div className="bg-primary rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl h-full flex flex-col justify-between">
                 {/* Background Pattern */}
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                 <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-20"></div>

                 <div className="relative z-10 space-y-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Join Our Community</h3>
                      <p className="text-white/80 font-light">
                        Experience the difference of a supportive, academic-focused environment.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-white/10 rounded-lg">
                          <MapPinIcon className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Visit Us</h4>
                          <p className="text-sm text-white/70">{schoolData.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-white/10 rounded-lg">
                          <PhoneIcon className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Call Us</h4>
                          <p className="text-sm text-white/70">{schoolData.phone}</p>
                        </div>
                      </div>
                    </div>
                 </div>

                 <div className="relative z-10 mt-10">
                   <a href="/contact" className="block w-full bg-white text-primary text-center py-4 rounded-xl font-bold hover:bg-secondary hover:text-white transition-all duration-300 shadow-lg">
                     Get in Touch
                   </a>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default HomePage;

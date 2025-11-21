import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  UserGroupIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  AcademicCapIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

const StaffDirectoryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const staffData = [
    {
      category: '3K-PK',
      icon: UsersIcon,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      staff: [
        { grade: '3K', name: 'Mrs. Huberman', email: 'SHuberman@PS72m.org' },
        { grade: '3K', name: 'Ms. Agudo', email: 'KAgudo@PS72m.org' },
        { grade: 'PK', name: 'Mrs. Gardner', email: 'JGardner@PS72m.org' },
        { grade: 'PK', name: 'Ms. Anton', email: 'GBeltre@PS72m.org' },
        { grade: 'PK', name: 'Ms. Lugo', email: 'ALugo@PS72m.org' },
        { grade: 'PK', name: 'Ms. M. Medina', email: 'MMedina@PS72m.org' },
        { grade: '3K & PK', name: 'Ms. Bannerman-Holmes', email: 'DBannerman@PS72m.org' },
        { grade: '3K & PK', name: 'Ms. Silva', email: 'SSilva@PS72m.org' }
      ]
    },
    {
      category: 'Kindergarten',
      icon: AcademicCapIcon,
      color: 'bg-orange-50 text-orange-700 border-orange-200',
      staff: [
        { grade: 'K/1/2 SC', name: 'Ms. Lester', email: 'DLester@PS72m.org' },
        { grade: 'K/1/2 SC', name: 'Ms. Garvin', email: 'PGarvin@PS72m.org' },
        { grade: 'K DL', name: 'Mrs. Javier', email: 'LJavier@PS72m.org' },
        { grade: 'K ICT', name: 'Mrs. Dumas', email: 'SDumas@PS72m.org' },
        { grade: 'K ICT', name: 'Ms. Sweeney', email: 'CSweeney@PS72m.org' }
      ]
    },
    {
      category: '1st Grade',
      icon: AcademicCapIcon,
      color: 'bg-sky-50 text-sky-700 border-sky-200',
      staff: [
        { grade: '1 DL', name: 'Ms. Martinez', email: 'EMartinez@PS72m.org' },
        { grade: '1 ICT', name: 'Ms. Chakmakian', email: 'MChakmakian@PS72m.org' },
        { grade: '1 ICT', name: 'Ms. Ryterband', email: 'SRyterband@PS72m.org' }
      ]
    },
    {
      category: '2nd Grade',
      icon: AcademicCapIcon,
      color: 'bg-amber-50 text-amber-700 border-amber-200',
      staff: [
        { grade: '2 ICT', name: 'Ms. Ezrachie', email: 'MEzrachie@PS72m.org' },
        { grade: '2 ICT', name: 'Ms. Futterman', email: 'JFutterman@PS72m.org' },
        { grade: '2 GE', name: 'Ms. Caceres', email: 'ACaceres@PS72m.org' }
      ]
    },
    {
      category: '3rd Grade',
      icon: AcademicCapIcon,
      color: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      staff: [
        { grade: '3/4 SC', name: 'Mr. Zamora', email: 'CZamora@PS72m.org' },
        { grade: '3/4 SC', name: 'Ms. Banks', email: 'KBanks@PS72m.org' },
        { grade: '3 GE', name: "Ms. O'Donnell", email: "D'ODonnell@PS72m.org" },
        { grade: '3 ICT', name: 'Mrs. Cynova', email: 'ACynova@PS72m.org' },
        { grade: '3 ICT', name: 'Mr. Sanfilippo', email: 'JSanfilippo@PS72m.org' }
      ]
    },
    {
      category: '4th Grade',
      icon: AcademicCapIcon,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      staff: [
        { grade: '4 GE', name: 'Mr. Alvarez', email: 'FAlvarez@PS72m.org' },
        { grade: '4 ICT', name: 'Mrs. Cruz', email: 'DCruz@PS72m.org' },
        { grade: '4 ICT', name: 'Ms. Gurtman', email: 'RGurtman@PS72m.org' }
      ]
    },
    {
      category: '5th Grade',
      icon: AcademicCapIcon,
      color: 'bg-orange-50 text-orange-700 border-orange-200',
      staff: [
        { grade: '5/6 SC', name: 'Mrs. Alvarez', email: 'AAlvarez@PS72m.org' },
        { grade: '5/6 SC', name: 'Ms. Benitez', email: 'LBenitez@PS72m.org' },
        { grade: '5/6 SC', name: 'Ms. Vidro', email: 'LVidro@PS72m.org' },
        { grade: '5 ICT', name: 'Ms. Paulino', email: 'SPaulino@PS72m.org' },
        { grade: '5 ICT', name: 'Ms. Spadacenta', email: 'ASpadacenta@PS72m.org' },
        { grade: '5 GE', name: 'Ms. Blakeman', email: 'MKBlakeman@PS72m.org' }
      ]
    },
    {
      category: '6th Grade',
      icon: AcademicCapIcon,
      color: 'bg-sky-50 text-sky-700 border-sky-200',
      staff: [
        { grade: '6 GE', name: 'Ms. Molfetta', email: 'RMolfetta@PS72m.org' },
        { grade: '6 ICT', name: 'Ms. Coleman', email: 'MColeman@PS72m.org' },
        { grade: '6 ICT', name: 'Ms. Kirejevas', email: 'KKirejevas@PS72m.org' }
      ]
    },
    {
      category: '7-8th Grade',
      icon: AcademicCapIcon,
      color: 'bg-teal-50 text-teal-700 border-teal-200',
      staff: [
        { grade: '7 ELA', name: 'Ms. Pauta', email: 'KPauta@PS72m.org' },
        { grade: '7 Math', name: 'Mrs. Bridgewater', email: 'KBridgewater@PS72m.org' },
        { grade: '7 ICT Generalist', name: 'Ms. John-Constant', email: 'TJohnConstant@PS72m.org' },
        { grade: '7/8 SC', name: 'Mr. Geoghan', email: 'EGeoghan@PS72m.org' },
        { grade: '7/8 SC', name: 'Ms. Bramble', email: 'MBramble@PS72m.org' },
        { grade: '7/8 SC', name: 'Mr. Rodriquez', email: 'RRodriquez@PS72m.org' },
        { grade: '7/8 Science', name: 'Ms. Zagami', email: 'CZagami@PS72m.org' },
        { grade: '7/8 Humanities', name: 'Mr. Cruz', email: 'TCruz@PS72m.org' },
        { grade: '8 ELA', name: 'Mrs. Leon', email: 'ALeon@PS72m.org' },
        { grade: '8 Math', name: 'Mr. Lopez', email: 'ALopez@PS72m.org' }
      ]
    },
    {
      category: 'Specials / Coaches',
      icon: UsersIcon,
      color: 'bg-amber-50 text-amber-700 border-amber-200',
      staff: [
        { grade: 'Art (Visual)', name: 'Ms. S. Ramos', email: 'SRamos@PS72m.org' },
        { grade: 'Literacy Coach', name: 'Ms. Haralambou', email: 'CHaralambou@PS72m.org' },
        { grade: 'Literacy Coach', name: 'Mrs. Sumter', email: 'ASumter@PS72m.org' },
        { grade: 'Physical Education', name: 'Mr. Rivera', email: 'JRivera@PS72m.org' },
        { grade: 'Physical Education', name: 'Mr. Harrington', email: 'CHarrington@PS72m.org' },
        { grade: 'Science', name: 'Ms. Collazo', email: 'ACollazo@PS72m.org' },
        { grade: 'Science', name: 'Ms. Gyles', email: 'TGyles@PS72m.org' }
      ]
    },
    {
      category: 'Intervention Services',
      icon: UserGroupIcon,
      color: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      staff: [
        { grade: 'ENL', name: 'Ms. M. Ramos', email: 'MRamos@PS72m.org' },
        { grade: 'ENL', name: 'Mrs. E. Rodriguez', email: 'ERodriguez@PS72m.org' }
      ]
    },
    {
      category: 'School Intervention Team',
      icon: UserGroupIcon,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      staff: [
        { grade: 'Psychologist', name: 'Mr. Marino', email: 'GMarino@PS72m.org' },
        { grade: 'Social Worker', name: 'Mrs. Smith', email: 'DSmith@PS72m.org' },
        { grade: 'Social Worker', name: 'Ms. Contreras', email: 'DContreras@PS72m.org' },
        { grade: 'IEP Teacher', name: 'Mrs. Trazoff', email: 'CTrazoff@PS72m.org' },
        { grade: 'Attendance Teacher / Dean', name: 'Mr. Thomas', email: 'MThomas@PS72m.org' }
      ]
    },
    {
      category: 'Related Services',
      icon: UserGroupIcon,
      color: 'bg-teal-50 text-teal-700 border-teal-200',
      staff: [
        { grade: 'Speech & Language', name: 'Ms. Caballero', email: 'PCaballero@PS72m.org' },
        { grade: 'Speech & Language', name: 'Ms. Delgado', email: 'MDelgado@PS72m.org' },
        { grade: 'Speech & Language', name: 'Ms. Axen', email: 'MAxen@PS72m.org' },
        { grade: 'Speech & Language', name: 'Mrs. Deck', email: 'MDeck@PS72m.org' },
        { grade: 'Occupational Therapist', name: 'Ms. Cheatham', email: 'ACheatham@PS72m.org' },
        { grade: 'Physical Therapist', name: 'Ms. Salkin', email: 'WSalkin@PS72m.org' },
        { grade: 'SETSS', name: 'Ms. Orlik', email: 'VOrlik@PS72m.org' },
        { grade: 'Counseling Mandated', name: 'Ms. Vasquez', email: 'LVasquez@PS72m.org' },
        { grade: 'Counseling Mandated', name: 'Ms. Jackson', email: 'OJackson@PS72m.org' }
      ]
    },
    {
      category: 'Community Coordinators',
      icon: UserGroupIcon,
      color: 'bg-orange-50 text-orange-700 border-orange-200',
      staff: [
        { grade: 'Climate and Culture / Dean', name: 'Ms. Hawkins', email: 'BHawkins@PS72m.org' },
        { grade: 'School Admin Manager', name: 'Ms. Escalera', email: 'EEscalera@PS72m.org' },
        { grade: 'Parent Coordinator', name: 'Ms. Jose (AKA Ms. Paola)', email: 'PJose@PS72m.org' }
      ]
    },
    {
      category: 'Community Based Organizations',
      icon: UserGroupIcon,
      color: 'bg-gray-50 text-gray-700 border-gray-300',
      staff: [
        { grade: "Children's Aid Director", name: 'Mr. Giordano', email: 'dgiordano@childrensaidnyc.org' }
      ]
    },
    {
      category: 'Payroll Secretary',
      icon: UserGroupIcon,
      color: 'bg-gray-50 text-gray-700 border-gray-300',
      staff: [
        { grade: 'Payroll School Secretary', name: 'Ms. Cantor', email: 'NCantor@PS72m.org' }
      ]
    }
  ];

  // Filter staff based on search query
  const filteredStaffData = staffData.map(section => ({
    ...section,
    staff: section.staff.filter(person =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.staff.length > 0);

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
               <UserGroupIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Staff <span className="font-semibold text-secondary">Directory</span>
            </h1>
            <p className="text-xl text-white/80 font-light">
              Meet our dedicated educators and support staff
            </p>
          </div>
        </section>

        {/* ============================================================================
            SEARCH & DIRECTORY
        ============================================================================ */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
          <div className="max-w-7xl mx-auto">

            {/* Search Bar */}
            <div className="mb-12">
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name, role, or email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 text-lg transition-all shadow-lg bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Staff Sections */}
            <div className="space-y-12">
              {filteredStaffData.length > 0 ? (
                filteredStaffData.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    {/* Section Header */}
                    <div className={`${section.color} border-b-2 p-6`}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                          <section.icon className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold">{section.category}</h2>
                      </div>
                    </div>

                    {/* Staff List */}
                    <div className="p-6 md:p-8">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {section.staff.map((person, personIndex) => (
                          <div
                            key={personIndex}
                            className="group bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                          >
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                <UserGroupIcon className="w-6 h-6 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-gray-900 mb-1 text-lg group-hover:text-primary transition-colors">
                                  {person.name}
                                </h3>
                                <p className="text-sm text-gray-600 font-medium mb-3">
                                  {person.grade}
                                </p>
                                <a
                                  href={`mailto:${person.email}`}
                                  className="inline-flex items-center gap-2 text-secondary hover:text-orange-600 font-medium text-sm transition-colors break-all"
                                >
                                  <EnvelopeIcon className="w-4 h-4 flex-shrink-0" />
                                  <span className="truncate">{person.email}</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12 text-center">
                  <MagnifyingGlassIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search query to find what you're looking for.
                  </p>
                </div>
              )}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StaffDirectoryPage;

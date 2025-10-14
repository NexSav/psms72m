import React from 'react';
import Navbar from '../components/Navbar';

const CellPhonePolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main id="main-content" className="pt-24">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-amber-700 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Cell Phone Policy
            </h1>
            <p className="text-lg text-white/90">
              Away for the Day - 2023-2024 School Year
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
              {/* Header Info */}
              <div className="mb-8 pb-6 border-b border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Sent Home September 7, 2023</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  2023-2024 Cell Phone Policy
                </h2>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-lg font-semibold text-lg">
                  AWAY FOR THE DAY
                </div>
              </div>

              {/* Policy Title */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Lexington Academy's Policy for Use of Cell Phones, Computing Devices, and Portable Music
                  and Entertainment Systems on School Property
                </h3>
                <p className="text-sm text-gray-600">
                  Adopted by the School Leadership Team: December 20, 2022<br />
                  Revised August 28, 2023
                </p>
              </div>

              {/* Permitted Items */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Students are permitted to bring the following electronic items to school:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Cell phones, laptops, tablets (Kindles, iPads)</li>
                </ul>
              </div>

              {/* Non-Permitted Items */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Unless otherwise requested in writing by school personnel, students are not permitted to
                  bring the following electronic items to school:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>"Smart" watches, and other similar computing devices ("computing devices"); and</li>
                  <li>Portable music and entertainment systems, such as iPods, MP3 players, PSP, and Nintendo DS</li>
                </ul>
              </div>

              {/* Away for the Day Policy */}
              <div className="mb-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  The use of cell phones at school is subject to the conditions as outlined below.
                </h4>
                <p className="text-gray-700 mb-4 font-semibold">
                  Cell phones will be subject to the AWAY FOR THE DAY policy. The AWAY FOR THE DAY policy
                  will require that all students place their cell phones in the Yondr Pouches.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Phones will be turned off.</li>
                  <li>Phones will be placed in a Yondr Pouch.</li>
                  <li>Phones must be returned at the end of the day/dismissal.</li>
                  <li>Phones may not be turned on or used during the school day or during afterschool. This ban
                    includes the use of cell phones for photography or videoing purposes.</li>
                </ul>
              </div>

              {/* School Discipline Approach */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  School Discipline Approach
                </h4>
                <p className="text-gray-700 mb-4">
                  Students who use cell phones, in violation of any provision of the DOE's Discipline Code,
                  the school's policy, Chancellor's regulation A-413, and/or the DOE's Internet Acceptable Use
                  and Safety Policy ("IAUSP") will be subject to discipline in accordance with the guidance
                  interventions and disciplinary responses set forth in the Discipline Code.
                </p>

                <div className="space-y-4 ml-4">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-2">First Violation:</h5>
                    <p className="text-gray-700">
                      The student will be referred to the Dean of Students. The student will be given a 'one-time
                      pass,' which will include a restorative approach to understanding and reviewing the cell phone
                      policy, and its purpose.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-2">Second Violation:</h5>
                    <p className="text-gray-700">
                      The phone will be confiscated and a meeting will be held with the Dean of Students and the
                      student's parent/legal guardian, at which time the cell phone will be returned to the
                      parent/guardian.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-2">Third Violation:</h5>
                    <p className="text-gray-700">
                      The phone will be confiscated, and a meeting will be held with the child's parent/legal guardian,
                      the Dean of Students, and the Principal/Assistant Principal, at which time the cell phone will be
                      returned to the parent. The student will no longer be allowed to bring his/her cell phone to
                      school (a restart will be given the following academic school year).
                    </p>
                  </div>
                </div>
              </div>

              {/* Family Support */}
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  FAMILY SUPPORT
                </h4>
                <div className="space-y-4 text-gray-700">
                  <p>
                    As a community, we are keenly aware of our families' needs. We recognize that many of our families
                    depend on the use of cell phones to stay in communication with their children, especially for
                    travel to and from school, and to stay in contact in the event of an emergency. As a school, we
                    fully commit to ensuring that parents/families/guardians will have communication through the use
                    the school's office phone <span className="font-semibold">(212)-860-5831/2</span>.
                  </p>
                  <p>
                    When families call the school, they will be supported by school personnel, i.e., Dean of Students,
                    Social Worker, Psychologist, and/or Guidance Counselor as needed.
                  </p>
                  <p>
                    If a family needs to communicate with their child during the school day, school personnel will
                    support families with access to their child as needed.
                  </p>
                </div>
              </div>
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

export default CellPhonePolicyPage;

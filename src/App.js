import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MissionStatementPage from './pages/MissionStatementPage';
import PrincipalsMessagePage from './pages/PrincipalsMessagePage';
import CellPhonePolicyPage from './pages/CellPhonePolicyPage';
import UniformPolicyPage from './pages/UniformPolicyPage';
import StaffDirectoryPage from './pages/StaffDirectoryPage';
import MentalHealthResourcesPage from './pages/MentalHealthResourcesPage';
import ContactPage from './pages/ContactPage';
import ComingSoonPage from './pages/ComingSoonPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mission-statement" element={<MissionStatementPage />} />
        <Route path="/principals-message" element={<PrincipalsMessagePage />} />
        <Route path="/cell-phone-policy" element={<CellPhonePolicyPage />} />
        <Route path="/uniform-policy" element={<UniformPolicyPage />} />
        <Route path="/staff-directory" element={<StaffDirectoryPage />} />
        <Route path="/mental-health-resources" element={<MentalHealthResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Coming Soon Pages */}
        <Route path="/about" element={<ComingSoonPage />} />
        <Route path="/administrative-team" element={<ComingSoonPage />} />
        <Route path="/policies-procedures" element={<ComingSoonPage />} />
        <Route path="/handbook" element={<ComingSoonPage />} />
        <Route path="/students" element={<ComingSoonPage />} />
        <Route path="/parents" element={<ComingSoonPage />} />
        <Route path="/parent-portal" element={<ComingSoonPage />} />
        <Route path="/calendars" element={<ComingSoonPage />} />
        <Route path="/monthly-activities-calendar" element={<ComingSoonPage />} />
        <Route path="/school-year-calendar" element={<ComingSoonPage />} />
        <Route path="/news" element={<ComingSoonPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MissionStatementPage from './pages/MissionStatementPage';
import PrincipalsMessagePage from './pages/PrincipalsMessagePage';
import CellPhonePolicyPage from './pages/CellPhonePolicyPage';
import MentalHealthResourcesPage from './pages/MentalHealthResourcesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mission-statement" element={<MissionStatementPage />} />
        <Route path="/principals-message" element={<PrincipalsMessagePage />} />
        <Route path="/cell-phone-policy" element={<CellPhonePolicyPage />} />
        <Route path="/mental-health-resources" element={<MentalHealthResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;

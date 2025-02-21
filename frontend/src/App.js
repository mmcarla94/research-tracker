import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import ORCIDLogin from './ORCIDLogin';

export default function App() {
  const [userORCID, setUserORCID] = useState(null);

  const handleLoginSuccess = (orcid) => {
    setUserORCID(orcid);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard userORCID={userORCID} />} />
        <Route path="/login" element={<ORCIDLogin onLoginSuccess={handleLoginSuccess} />} />
      </Routes>
    </Router>
  );
}
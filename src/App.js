import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Login'; // Assuming LoginPage is in the same directory
import Assistance from './Assistant'; // Assuming Assistance is the App component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/assistant" element={<Assistance />} />
        <Route path="*" element={<LoginPage />} /> {/* Redirects unknown paths to login */}
      </Routes>
    </Router>
  );
};

export default App;

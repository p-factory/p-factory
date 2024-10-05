import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DevStylesPreview from './View/DevStylesPreview';
import MainPage from './View/Main/MainPage';
import HowToUse from './View/P-FactoryDetail/HowToUse';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/DevStylesPreview" element={<DevStylesPreview />} />
        {/* Main */}
        <Route path="/" element={<MainPage />} />
        {/* P-FactoryDetail */}
        <Route path="/HowToUse" element={<HowToUse />} />
      </Routes>
    </Router>
  );
};

export default App;

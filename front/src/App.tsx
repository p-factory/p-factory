import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DevStylesPreview from './View/DevStylesPreview';
import DevDesignSystem from './View/DevDesignSystem';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/Dev" element={<DevDesignSystem />} />
        <Route path="/DevStylesPreview" element={<DevStylesPreview />} />
      </Routes>
    </Router>
  );
};

export default App;

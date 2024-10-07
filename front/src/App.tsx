import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DevStylesPreview from './View/DEV/DevStylesPreview';
import DevDesignSystem from './View/DEV/DevDesignSystem';
import Login from './View/Login/Login';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dev" element={<DevDesignSystem />} />
        <Route path="/DevStylesPreview" element={<DevStylesPreview />} />
      </Routes>
    </Router>
  );
};

export default App;

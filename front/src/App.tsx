import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './View/Main/MainPage';
import Manual from './View/Main/ManualPage';
import VocabularyBookPage from './View/VocabularyBook/VocabularyBookPage';
import DevStylesPreview from './View/DEV/DevStylesPreview';
import DevDesignSystem from './View/DEV/DevDesignSystem';
import DevDesignSystemWH from './View/DEV/DevDesignSystem-wh.test';
import Login from './View/Login/Login';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Dev" element={<DevDesignSystem />} />
        <Route path="/DevWH" element={<DevDesignSystemWH />} />
        <Route path="/DevStylesPreview" element={<DevStylesPreview />} />
        {/* Main */}
        <Route path="/" element={<MainPage />} />
        <Route path="/Manual" element={<Manual />} />
        {/* VocabularyBook */}
        <Route path="/VocabularyBook" element={<VocabularyBookPage />} />
      </Routes>
    </Router>
  );
};

export default App;

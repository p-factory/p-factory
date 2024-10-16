import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './View/Main/MainPage';
import Manual from './View/Main/ManualPage';
import VocabularyBookPage from './View/VocabularyBook/VocabularyBookPage';
import DevStylesPreview from './View/DEV/DevStylesPreview';
import DevDesignSystem from './View/DEV/DevDesignSystem';
import DevDesignSystemWH from './View/DEV/DevDesignSystem-wh.test';
import DevPositionLogin from './View/DEV/Position/DevPositionLogin.test';
import DevPositionViewport from './View/DEV/Position/DevPositionViewport.test';
import DevPositionPx from './View/DEV/Position/DevPositionPx.test';
import Login from './View/Login/Login';
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main */}
        <Route path="/" element={<MainPage />} />
        <Route path="/Manual" element={<Manual />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dev" element={<DevDesignSystem />} />
        <Route path="/DevWH" element={<DevDesignSystemWH />} />
        <Route path="/DevStylesPreview" element={<DevStylesPreview />} />
        {/* DEVPosition */}
        <Route path="/DevPosition/Login" element={<DevPositionLogin />} />
        <Route path="/DevPosition/Viewport" element={<DevPositionViewport />} />
        <Route path="/DevPosition/Px" element={<DevPositionPx />} />
        {/* VocabularyBook */}
        <Route path="/VocabularyBook" element={<VocabularyBookPage />} />
      </Routes>
    </Router>
  );
};

export default App;

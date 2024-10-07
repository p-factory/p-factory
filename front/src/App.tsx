import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DevStylesPreview from './View/DevStylesPreview';
import MainPage from './View/Main/MainPage';
import Manual from './View/Main/ManualPage';
import VocabularyBookPage from './View/VocabularyBook/VocabularyBookPage';

const App = () => {
  return (
    <Router>
      <Routes>
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

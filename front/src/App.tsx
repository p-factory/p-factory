import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DevStylesPreview from './View/DevStylesPreview';
import MainPage from './View/Main/MainPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/DevStylesPreview" element={<DevStylesPreview />} />
        {/* Main */}
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;

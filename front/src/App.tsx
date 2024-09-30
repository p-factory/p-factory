import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DevTailwindPreview from './View/devTailwindPreview';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/devTailwindPreview" element={<DevTailwindPreview />} />
      </Routes>
    </Router>
  );
};

export default App;

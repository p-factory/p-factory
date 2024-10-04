import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DevStylesPreview from './View/DevStylesPreview';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/DevStylesPreview" element={<DevStylesPreview />} />
      </Routes>
    </Router>
  );
};

export default App;

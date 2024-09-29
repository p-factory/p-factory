import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DevTerminal from './View/devTermial';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/devTerminal" element={<DevTerminal />} />
      </Routes>
    </Router>
  );
};

export default App;

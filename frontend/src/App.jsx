import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;

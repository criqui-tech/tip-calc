import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import { HomeCheckout } from './modules/checkout/pages/home/HomeCheckout';

function App() {
  return (
    <Router>
      <Routes>
        <Route caseSensitive={true} path="/" element={<HomeCheckout />} />
      </Routes>
    </Router>
  );
}

export default App;

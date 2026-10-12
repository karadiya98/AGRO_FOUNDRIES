import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Aap yahan aur bhi naye pages add kar sakte hain jaise: <Route path="/products" element={<Products />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Navbar from './components/Navbar';
import FillForm from './components/FillForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


// Import Pages
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

// Import Global Styles
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      {/* Navbar stays fixed on top across all pages */}
      <Navbar />

      {/* Page Content switches based on URL path */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      <FillForm />

      {/* Footer stays fixed on bottom across all pages */}
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
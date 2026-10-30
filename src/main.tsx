import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Navbar from './components/Navbar';
import FillForm from './components/FillForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingMessenger from './components/FloatingMessenger';

// Import Pages
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import Biometrics from './pages/Biometrics';
import DoorAccess from './pages/DoorAccess';
import WalkthroughScanners from './pages/WalkthroughScanners';
import SmartLocks from './pages/SmartLocks';
import ContactUs from './pages/ContactUs';
import GetQuotation from './pages/GetQuotation';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Documentation from './pages/Documentation';
import FormSubmitted from './pages/FormSubmitted';

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
        <Route path="/products/biometrics" element={<Biometrics />} />
        <Route path="/products/door-access" element={<DoorAccess />} />
        <Route path="/products/walkthrough-scanners" element={<WalkthroughScanners />} />
        <Route path="/products/smart-locks" element={<SmartLocks />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/get-a-quotation" element={<GetQuotation />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/form-submitted" element={<FormSubmitted />} />
      </Routes>
      <FillForm />
      <FloatingMessenger />
      {/* Footer stays fixed on bottom across all pages */}
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
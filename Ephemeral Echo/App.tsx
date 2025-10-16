import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import HomeSEO from './components/HomeSEO';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { CTABanner } from './components/CTABanner';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { LoginPage } from './components/LoginPage';
import { ForgotPasswordPage } from './components/ForgotPasswordPage';
import { StudentRegistrationPage } from './components/StudentRegistrationPage';
import { CompanyRegistrationPage } from './components/CompanyRegistrationPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <HomeSEO />
      <Hero />
      <HowItWorks />
      <Features />
      <Stats />
      <Testimonials />
      <CTABanner />
      <Newsletter />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register/student" element={<StudentRegistrationPage />} />
          <Route path="/register/company" element={<CompanyRegistrationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
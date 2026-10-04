import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeroUIProvider } from '@heroui/react';
import { ThemeProvider, useTheme } from './ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Home Page with all portfolio sections
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Services />
      <Testimonials />
      <Certificates />
      <Contact />
    </>
  );
}

// Dedicated /services Page
function ServicesPage() {
  return (
    <div className="pt-16 md:pt-18">
      <Services isFullPage={true} />
      <Contact />
    </div>
  );
}

function AppContent() {
  const { dark } = useTheme();
  return (
    <div className={`min-h-screen font-inter overflow-x-hidden transition-colors duration-300 ${dark ? 'bg-[#0A0D14] text-slate-100 noise-bg' : 'bg-[#F4F6FB] text-slate-900'}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <HeroUIProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </HeroUIProvider>
    </ThemeProvider>
  );
}

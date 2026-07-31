import { ThemeProvider, useTheme } from './ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  const { dark } = useTheme();
  return (
    <div className={`min-h-screen font-inter overflow-x-hidden transition-colors duration-300 ${dark ? 'bg-[#05050A] text-slate-100 noise-bg' : 'bg-[#F4F6FB] text-slate-900'}`}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Testimonials />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

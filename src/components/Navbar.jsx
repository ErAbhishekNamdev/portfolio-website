import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';

import logoicons from '../assets/whitelogo.png';

const navLinks = ['About', 'Projects', 'Experience', 'Skills', 'Certificates', 'Contact'];

// Custom hook to dynamically crop empty transparent padding around PNG image
function useCroppedLogo(imageSrc) {
  const [croppedSrc, setCroppedSrc] = useState(imageSrc);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, img.width, img.height);
        const data = imgData.data;

        let minX = img.width, minY = img.height, maxX = 0, maxY = 0;
        let found = false;

        for (let y = 0; y < img.height; y++) {
          for (let x = 0; x < img.width; x++) {
            const alpha = data[(y * img.width + x) * 4 + 3];
            if (alpha > 15) { // Non-transparent pixel threshold
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
              found = true;
            }
          }
        }

        if (found && maxX > minX && maxY > minY) {
          const cropW = maxX - minX + 1;
          const cropH = maxY - minY + 1;
          const cropCanvas = document.createElement('canvas');
          cropCanvas.width = cropW;
          cropCanvas.height = cropH;
          const cropCtx = cropCanvas.getContext('2d');
          cropCtx.drawImage(canvas, minX, minY, cropW, cropH, 0, 0, cropW, cropH);

          setCroppedSrc(cropCanvas.toDataURL('image/png'));
        }
      } catch (e) {
        setCroppedSrc(imageSrc);
      }
    };
  }, [imageSrc]);

  return croppedSrc;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dark, toggle } = useTheme();

  // Get auto-cropped logo with 0 whitespace padding
  const autoCroppedLogo = useCroppedLogo(logoicons);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? dark
          ? 'bg-[#05050A]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          : 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_8px_30px_rgba(148,163,184,0.15)]'
        : dark
          ? 'bg-[#05050A]/70 backdrop-blur-md'
          : 'bg-white/70 backdrop-blur-md'
        }`}
    >
      <div className="max-w-container mx-auto px-6 py-2 flex items-center justify-between min-h-[64px]">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group py-1 min-w-0">
          {/* Logo Badge Icon */}
          <div className={`w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center overflow-hidden border transition-all duration-300 group-hover:scale-105 shrink-0 ${dark
              ? 'bg-transparent border-[#00D4FF]/40 shadow-[0_0_15px_rgba(0,212,255,0.25)] group-hover:border-[#00D4FF]'
              : 'bg-transparent border-slate-300 shadow-md group-hover:border-[#0284C7]'
            }`}>
            <img
              src={autoCroppedLogo}
              alt="Code Craft Journey Logo"
              className={`w-full h-full object-contain p-0 transition-transform duration-300 ${dark ? 'mix-blend-lighten' : 'mix-blend-multiply'
                }`}
            />
          </div>

          {/* Logo Text Block */}
          <div className="flex flex-col gap-0.5 text-left min-w-0 overflow-hidden">
            <span className={`text-[18px] md:text-[18px] font-bold leading-tight transition-colors duration-300 truncate whitespace-nowrap ${dark
                ? 'text-white group-hover:text-[#00D4FF]'
                : 'text-slate-900 group-hover:text-[#0284C7]'
              }`}>
              Code Craft Journey
            </span>
            <span className={`text-[12px] md:text-[12px] font-bold leading-tight transition-colors duration-300 truncate whitespace-nowrap ${dark
                ? 'text-slate-400 group-hover:text-slate-200'
                : 'text-slate-500 group-hover:text-slate-700'
              }`}>
              From Concept to Creation
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-[15px] font-inter font-medium tracking-[0.3px] transition-colors relative py-1 group ${dark
                ? 'text-slate-300 hover:text-[#00D4FF]'
                : 'text-slate-700 hover:text-[#0284C7]'
                }`}
            >
              {/* new changes */}
              {/* other files changes */}
              {/* new changes  */}
              {link}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${dark ? 'bg-[#00D4FF]' : 'bg-[#0284C7]'
                }`} />
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggle}
            className={`relative p-2.5 rounded-full flex items-center justify-center transition-all duration-300 border ${dark
              ? 'bg-[#111118] border-white/10 text-amber-400 hover:border-amber-400/50 hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]'
              : 'bg-slate-100 border-slate-300 text-indigo-600 hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]'
              }`}
            title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            <motion.div
              key={dark ? 'dark' : 'light'}
              initial={{ rotate: -90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {dark ? <FaSun size={17} /> : <FaMoon size={15} />}
            </motion.div>
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${dark
              ? 'bg-gradient-to-r from-[#00D4FF]/20 via-[#9B59FF]/20 to-[#FF6EC7]/20 border border-[#00D4FF]/40 text-white hover:border-[#00D4FF] hover:shadow-[0_0_25px_rgba(0,212,255,0.3)]'
              : 'bg-gradient-to-r from-[#0284C7] to-[#7C3AED] text-white shadow-md hover:shadow-indigo-500/25 hover:opacity-95'
              }`}
          >
            Let's Talk <span className="text-base">→</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggle}
            className={`p-2 rounded-full border ${dark ? 'bg-[#111118] border-white/10 text-amber-400' : 'bg-slate-100 border-slate-300 text-indigo-600'
              }`}
            aria-label="Toggle Theme"
          >
            {dark ? <FaSun size={15} /> : <FaMoon size={14} />}
          </button>
          <button
            className={`text-2xl p-1 ${dark ? 'text-white' : 'text-slate-800'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden backdrop-blur-xl border-t ${dark ? 'bg-[#05050A]/95 border-white/10' : 'bg-white/95 border-slate-200'
              }`}
          >
            <div className="flex flex-col items-center gap-5 py-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-semibold transition-colors ${dark ? 'text-slate-200 hover:text-[#00D4FF]' : 'text-slate-800 hover:text-[#0284C7]'
                    }`}
                >
                  {link}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold ${dark ? 'bg-[#00D4FF] text-slate-950 font-bold' : 'bg-[#0284C7] text-white'
                  }`}
              >
                Let's Talk →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

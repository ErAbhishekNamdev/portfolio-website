import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaSun, FaMoon, FaArrowRight } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';

import logoicons from '../assets/logo.jpeg';

const navLinks = ['About', 'Projects', 'Experience', 'Skills', 'Certificates', 'Contact'];

const TAGLINES = [
  'From Concept to Creation',
  'From Design to deployment',
  'Turn ideas into reality',
  'Frontend is my passion',
];

function useNavTyping(lines) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState('typing');

  useEffect(() => {
    let id;
    const current = lines[index];
    if (stage === 'typing') {
      if (text.length < current.length)
        id = setTimeout(() => setText(current.slice(0, text.length + 1)), 70);
      else id = setTimeout(() => setStage('pause'), 1800);
    } else if (stage === 'pause') {
      id = setTimeout(() => setStage('deleting'), 800);
    } else {
      if (text.length > 0)
        id = setTimeout(() => setText(current.slice(0, text.length - 1)), 35);
      else {
        setIndex((i) => (i + 1) % lines.length);
        setStage('typing');
      }
    }
    return () => clearTimeout(id);
  }, [text, index, stage, lines]);

  return text;
}

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

function NavTagline() {
  const taglineText = useNavTyping(TAGLINES);
  return (
    <span className="inline-flex items-center gap-[2px]">
      {taglineText}
      <span className="inline-block w-[1.5px] h-[0.8em] rounded-full bg-current animate-pulse ml-[1px]" />
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showIntroPopup, setShowIntroPopup] = useState(false);
  const { dark, toggle, setIntroPopupOpen } = useTheme();

  // Get auto-cropped logo with 0 whitespace padding
  const autoCroppedLogo = useCroppedLogo(logoicons);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setShowIntroPopup(true);
    setIntroPopupOpen(true);
  }, [setIntroPopupOpen]);

  const closeIntroPopup = () => {
    setShowIntroPopup(false);
    setIntroPopupOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? dark
            ? 'bg-[#131A2B]/95 backdrop-blur-xl border-b border-[#00D4FF]/25 shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
            : 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_8px_30px_rgba(148,163,184,0.15)]'
          : dark
            ? 'bg-[#0F131F]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.45)]'
            : 'bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-container mx-auto px-6 py-2 flex items-center justify-between min-h-[64px]">
          {/* Brand Logo Container with World-Class 3D Animation */}
          <a href="#" className="flex items-center gap-3 group py-1 min-w-0 perspective-[1000px]">
            {/* 3D Floating & Rotating Logo Badge */}
            <motion.div
              whileHover={{ rotateY: 18, rotateX: -12, scale: 1.12, y: -2 }}
              whileTap={{ scale: 0.92 }}
              animate={{ y: [0, -4, 0] }}
              transition={{
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                rotateY: { type: "spring", stiffness: 300, damping: 15 },
                rotateX: { type: "spring", stiffness: 300, damping: 15 },
              }}
              className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center shrink-0 rounded-xl p-[2px] transform-gpu shadow-[0_4px_20px_rgba(0,212,255,0.4)] group-hover:shadow-[0_0_30px_rgba(0,212,255,0.7)] transition-shadow duration-300"
              style={{
                background: "linear-gradient(135deg, #00D4FF 0%, #7C3AED 50%, #F472B6 100%)",
              }}
            >
              {/* 3D Rotating Glowing Ring Effect */}
              <span className="absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-[#00D4FF] via-[#7C3AED] to-[#F472B6] opacity-60 group-hover:opacity-100 blur-sm transition-opacity duration-300 animate-pulse" />

              {/* Inner Logo Image Wrapper */}
              <div className="relative z-10 w-full h-full rounded-[10px] overflow-hidden bg-[#0A0D14] flex items-center justify-center">
                <img
                  src={autoCroppedLogo}
                  alt="Code Craft Journey Logo"
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    dark ? 'brightness-110' : 'brightness-105'
                  }`}
                />
                {/* 3D Glass Light Beam Shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out pointer-events-none" />
              </div>
            </motion.div>

            {/* Logo Text Block */}
            <div className="flex flex-col gap-0.5 text-left min-w-0 overflow-hidden">
              <span className={`text-[18px] md:text-[18px] font-bold leading-tight truncate whitespace-nowrap ${dark ? 'text-white' : 'text-slate-900'
                }`}>
                Code Craft Journey
              </span>
              <span className={`text-[13px] md:text-[11px] font-semibold leading-tight whitespace-nowrap flex items-center gap-[2px] ${dark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                <NavTagline />
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
                ? 'bg-[#121824] border-white/10 text-amber-400 hover:border-amber-400/50 hover:shadow-[0_0_15px_rgba(251,191,36,0.25)]'
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
                ? 'bg-gradient-to-r from-[#00D4FF]/20 via-[#9B59FF]/20 to-[#FF6EC7]/20 border border-[#00D4FF]/40 text-white hover:border-[#00D4FF] hover:shadow-[0_0_25px_rgba(0,212,255,0.35)] hover:scale-105'
                : 'bg-gradient-to-r from-[#0284C7] to-[#7C3AED] text-white shadow-md hover:shadow-indigo-500/25 hover:opacity-95 hover:scale-105'
                }`}
            >
              Let's Talk <span className="text-base">→</span>
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggle}
              className={`p-2 rounded-full border ${dark ? 'bg-[#121824] border-white/10 text-amber-400' : 'bg-slate-100 border-slate-300 text-indigo-600'
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
              className={`md:hidden backdrop-blur-xl border-t ${dark ? 'bg-[#0A0D14]/95 border-white/10' : 'bg-white/95 border-slate-200'
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
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold ${dark ? 'bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] text-white font-bold shadow-[0_0_20px_rgba(0,212,255,0.3)]' : 'bg-[#0284C7] text-white'
                    }`}
                >
                  Let's Talk →
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {showIntroPopup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center backdrop-blur-[5px] bg-black/40 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`relative w-full max-w-[350px] overflow-hidden rounded-[24px] border p-5 transition-all duration-300 ${dark
              ? 'border-white/10 dark:bg-[#1E1E2E] text-white'
              : 'border-slate-200 bg-white text-slate-950'
              }`}
            style={{
              boxShadow: dark
                ? '0 20px 60px rgba(0,0,0,0.55)'
                : '0 20px 60px rgba(15,23,42,0.15)',
            }}
          >
            <button
              type="button"
              onClick={closeIntroPopup}
              aria-label="Close"
              className={`absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full text-base transition-colors ${dark
                ? 'text-slate-400 hover:text-white hover:bg-white/10'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
            >
              ✕
            </button>

            <div className="flex flex-col items-center gap-3.5 text-center">
              <div className="relative perspective-[1000px]">
                <motion.div
                  whileHover={{ rotateY: 20, rotateX: -12, scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                    rotateY: { type: "spring", stiffness: 300, damping: 15 },
                    rotateX: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  className="relative w-14 h-14 flex items-center justify-center shrink-0 rounded-2xl p-[2.5px] transform-gpu shadow-[0_4px_22px_rgba(0,212,255,0.4)] hover:shadow-[0_0_35px_rgba(0,212,255,0.75)] transition-shadow duration-300"
                  style={{
                    background: "linear-gradient(135deg, #00D4FF 0%, #7C3AED 50%, #F472B6 100%)",
                  }}
                >
                  {/* 3D Rotating Glowing Aura Ring */}
                  <span className="absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-[#00D4FF] via-[#7C3AED] to-[#F472B6] opacity-60 group-hover:opacity-100 blur-md transition-opacity duration-300 animate-pulse" />

                  {/* Inner Logo Wrapper */}
                  <div className="relative z-10 w-full h-full rounded-xl overflow-hidden bg-[#0A0D14] flex items-center justify-center">
                    <img
                      src={autoCroppedLogo}
                      alt="Code Craft Journey Logo"
                      className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${
                        dark ? 'brightness-110' : 'brightness-105'
                      }`}
                    />
                    {/* 3D Glass Light Beam Shimmer */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent translate-x-[-120%] hover:translate-x-[120%] transition-transform duration-700 ease-out pointer-events-none" />
                  </div>
                </motion.div>
              </div>

              <div className="space-y-1.5">
                <h2 className={`text-[19px] font-semibold tracking-tight ${dark ? 'text-white' : 'text-slate-950'}`}>
                  Welcome to Code Craft Journey
                </h2>
                <p className={`mx-auto max-w-[90%] text-xs leading-5 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Grow your business with us. Let’s connect and build a strategy that turns your ideas into revenue.
                </p>
              </div>
            </div>

            <div className="mt-5">
              <a
                href="#contact"
                onClick={closeIntroPopup}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#F97316] px-5 py-2.5 text-xs font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.25)] transition hover:bg-[#fb8b3a]"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

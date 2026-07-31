import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight, FaDownload } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';

export default function Hero() {
  const { dark } = useTheme();

  return (
    <section id="hero" className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 transition-colors duration-300 ${
      dark ? 'bg-[#030308]' : 'bg-[#F4F6FB]'
    }`}>

      {/* Ambient background glows */}
      {dark && (
        <>
          <div
            className="absolute bottom-[-150px] left-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.18) 0%, rgba(0,229,160,0.06) 40%, transparent 70%)', filter: 'blur(90px)' }}
          />
          <div
            className="absolute top-[-100px] right-[-100px] w-[550px] h-[550px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(155,89,255,0.18) 0%, rgba(255,110,199,0.06) 40%, transparent 70%)', filter: 'blur(90px)' }}
          />
        </>
      )}

      {!dark && (
        <>
          <div
            className="absolute top-[-120px] left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(2,132,199,0.12) 0%, rgba(124,58,237,0.05) 50%, transparent 70%)', filter: 'blur(80px)' }}
          />
          <div
            className="absolute bottom-[-100px] right-[-100px] w-[550px] h-[550px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, rgba(192,38,211,0.05) 50%, transparent 70%)', filter: 'blur(80px)' }}
          />
        </>
      )}

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide border mb-6 backdrop-blur-md ${
            dark
              ? 'bg-[#111118]/90 border-emerald-500/40 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
              : 'bg-white/95 border-emerald-500/50 text-emerald-700 shadow-md'
          }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          Available for New Opportunities
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`font-syne font-extrabold tracking-tight leading-none ${
            dark ? 'text-white' : 'text-slate-900'
          }`}
          style={{
            fontSize: 'clamp(46px, 7.5vw, 92px)',
            textShadow: dark ? '0 0 60px rgba(0,212,255,0.2)' : 'none',
          }}
        >
          Abhishek Namdev
        </motion.h1>

        {/* Subtitle / Role Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4"
        >
          <span className={`text-xl md:text-2xl font-bold font-syne ${
            dark ? 'text-[#00D4FF]' : 'text-[#0284C7]'
          }`}>
            Software Developer &amp; Web Developer
          </span>
          <p className={`mt-3 text-base md:text-lg max-w-2xl mx-auto font-medium ${
            dark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            Crafting high-performance web applications, interactive 3D experiences, and modern scalable digital products.
          </p>
        </motion.div>

        {/* CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
              dark
                ? 'bg-gradient-to-r from-[#00D4FF] to-[#00B8E0] text-slate-950 font-bold shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] hover:scale-105'
                : 'bg-gradient-to-r from-[#0284C7] to-[#7C3AED] text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/45 hover:scale-105'
            }`}
          >
            Get In Touch <FaArrowRight className="text-xs" />
          </a>
          <a
            href="#"
            className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 border ${
              dark
                ? 'border-white/30 text-white hover:border-white/60 hover:bg-white/15 backdrop-blur-md'
                : 'border-slate-400 text-slate-900 bg-white/90 hover:border-slate-500 hover:bg-white shadow-md'
            }`}
          >
            <FaDownload className="text-xs" /> Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex items-center gap-6"
        >
          {[
            { icon: <FaGithub />, link: '#', label: 'GitHub' },
            { icon: <FaLinkedin />, link: '#', label: 'LinkedIn' },
            { icon: <FaTwitter />, link: '#', label: 'Twitter' },
          ].map((s, i) => (
            <a
              key={i}
              href={s.link}
              aria-label={s.label}
              className={`p-3 rounded-full border text-lg transition-all duration-300 ${
                dark
                  ? 'bg-[#111118]/90 border-white/20 text-slate-200 hover:text-[#00D4FF] hover:border-[#00D4FF]/60 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]'
                  : 'bg-white border-slate-300 text-slate-800 hover:text-[#0284C7] hover:border-[#0284C7]/60 shadow-md'
              }`}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <div className={`w-5 h-9 rounded-full border-2 flex justify-center pt-1.5 ${
          dark ? 'border-white/30' : 'border-slate-500'
        }`}>
          <div className={`w-1.5 h-1.5 rounded-full animate-scroll-dot ${
            dark ? 'bg-[#00D4FF]' : 'bg-[#0284C7]'
          }`} />
        </div>
        <span className={`text-[11px] font-bold tracking-widest uppercase ${
          dark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

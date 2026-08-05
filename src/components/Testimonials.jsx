import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';

const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'CTO @ TechNova',
    initials: 'AJ',
    bgColor: '#00D4FF',
    lightBgColor: '#0284C7',
    quoteColor: '#00D4FF',
    text: 'Abhishek is an exceptional developer who brings both technical excellence and creative problem solving to every project. His ability to build intuitive, scalable web applications is outstanding.',
  },
  {
    name: 'Marcus Lee',
    role: 'Founder @ NeonLabs',
    initials: 'ML',
    bgColor: '#9B59FF',
    lightBgColor: '#7C3AED',
    quoteColor: '#9B59FF',
    text: 'Working with Abhishek was a game-changer for our platform. He engineered our application from scratch with incredible speed, crisp design execution, and top-tier code architecture.',
  },
  {
    name: 'Sophia Chen',
    role: 'Design Director @ Flow Studio',
    initials: 'SC',
    bgColor: '#FF6EC7',
    lightBgColor: '#C026D3',
    quoteColor: '#FF6EC7',
    text: 'Abhishek bridges UI design and complex frontend logic seamlessly. He implemented our interactive 3D scenes and animations flawlessly while optimizing performance across mobile and desktop.',
  },
  {
    name: 'Daniel Martinez',
    role: 'Product Lead @ QuantumX',
    initials: 'DM',
    bgColor: '#00E5A0',
    lightBgColor: '#059669',
    quoteColor: '#00E5A0',
    text: 'His code quality, communication, and architecture choices were exemplary. Abhishek consistently delivers ahead of schedule, with clean, reusable, and thoroughly tested code.',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { dark } = useTheme();

  const subtext = dark ? 'text-slate-400' : 'text-slate-600';
  const heading = dark ? 'text-white' : 'text-slate-900';
  const cardBg = dark ? 'glass-card border-white/10' : 'bg-white border-slate-200/90 shadow-md shadow-slate-200/40';

  return (
    <section id="testimonials" className={`py-24 px-4 section-spotlight transition-colors duration-300 ${dark ? 'bg-[#0E131F]' : 'bg-[#F4F6FB]'}`}>
      <div className="max-w-container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className={`text-xs tracking-[3px] uppercase font-semibold ${dark ? 'text-[#00D4FF]' : 'text-[#0284C7]'}`}>Endorsements</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-syne">
            <span className={heading}>Client </span>
            <span className="gradient-text-cyan-purple">Testimonials</span>
          </h2>
          <p className={`mt-3 max-w-xl mx-auto text-sm ${subtext}`}>Feedback from engineering leads, startup founders, and design directors.</p>
        </motion.div>

        {/* Filter / Selector Pills */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-10 justify-center flex-wrap">
          {testimonials.map((t, i) => {
            const avatarBg = dark ? t.bgColor : t.lightBgColor;
            const isActive = active === i;

            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-all duration-300 shrink-0 ${
                  isActive
                    ? dark
                      ? 'bg-[#111118] border-[#00D4FF]/60 shadow-[0_0_15px_rgba(0,212,255,0.2)]'
                      : 'bg-white border-[#0284C7]/60 shadow-md'
                    : dark
                      ? 'bg-[#0A0A14]/80 border-white/10 hover:border-white/20'
                      : 'bg-white/70 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-slate-950"
                  style={{ background: avatarBg }}
                >
                  {t.initials}
                </div>
                <div className="text-left">
                  <p className={`text-sm font-semibold ${heading}`}>{t.name}</p>
                  <p className={`text-xs ${subtext}`}>{t.role.split('@')[1] || t.role}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => {
            const avatarBg = dark ? t.bgColor : t.lightBgColor;
            const isFeatured = active === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`border rounded-2xl p-7 transition-all duration-300 card-glow relative ${cardBg} ${
                  isFeatured
                    ? dark
                      ? 'border-[#00D4FF]/40 shadow-[0_0_30px_rgba(0,212,255,0.12)]'
                      : 'border-[#0284C7]/40 shadow-lg shadow-slate-200'
                    : ''
                }`}
              >
                <FaQuoteLeft className={`text-3xl mb-4 ${dark ? 'text-[#00D4FF]/40' : 'text-[#0284C7]/40'}`} />

                <p className={`text-base leading-relaxed mb-6 font-inter ${heading}`}>{t.text}</p>

                <div className={`border-t pt-4 flex items-center gap-3.5 ${dark ? 'border-white/10' : 'border-slate-200'}`}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-slate-950 shadow-sm"
                    style={{ background: avatarBg }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${heading}`}>{t.name}</p>
                    <p className={`text-xs ${subtext}`}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

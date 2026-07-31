import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const { dark } = useTheme();

  const heading = dark ? 'text-white' : 'text-slate-900';
  const subtext = dark ? 'text-slate-400' : 'text-slate-600';
  const cardBg = dark ? 'glass-card border-white/10' : 'bg-white border-slate-200/90 shadow-md shadow-slate-200/40';
  const inputBg = dark
    ? 'bg-[#111118]/80 border-white/15 text-slate-100 placeholder-slate-500 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]'
    : 'bg-slate-100/90 border-slate-300 text-slate-900 placeholder-slate-500 focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]';

  return (
    <section id="contact" className={`py-24 px-4 relative overflow-hidden transition-colors duration-300 ${dark ? 'bg-[#05050A]' : 'bg-[#F4F6FB]'}`}>
      {/* Background Ambient Glows */}
      <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[130px] pointer-events-none ${
        dark ? 'bg-[#00D4FF]/[0.08]' : 'bg-[#0284C7]/10'
      }`} />
      <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[130px] pointer-events-none ${
        dark ? 'bg-[#9B59FF]/[0.08]' : 'bg-[#7C3AED]/10'
      }`} />

      <div className="max-w-container mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className={`text-xs tracking-[3px] uppercase font-semibold ${dark ? 'text-[#00D4FF]' : 'text-[#0284C7]'}`}>Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-syne">
            <span className={heading}>Let's </span>
            <span className="gradient-text-cyan-purple">Connect</span>
          </h2>
          <p className={`mt-3 max-w-xl mx-auto text-sm ${subtext}`}>Have a project in mind, an open role, or want to collaborate? Send a message and let's talk.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info Side */}
          <div className="space-y-6">
            <div className={`flex items-center gap-4 rounded-2xl p-6 border card-glow ${cardBg}`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 ${
                dark ? 'bg-[#00D4FF]/15 text-[#00D4FF]' : 'bg-[#0284C7]/15 text-[#0284C7]'
              }`}>
                <FaEnvelope />
              </div>
              <div>
                <p className={`font-bold text-sm ${heading}`}>Email</p>
                <a href="mailto:abhishek.namdev@example.com" className={`text-sm hover:underline ${subtext}`}>
                  abhishek.namdev@example.com
                </a>
              </div>
            </div>

            <div className={`flex items-center gap-4 rounded-2xl p-6 border card-glow ${cardBg}`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 ${
                dark ? 'bg-[#9B59FF]/15 text-[#9B59FF]' : 'bg-[#7C3AED]/15 text-[#7C3AED]'
              }`}>
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className={`font-bold text-sm ${heading}`}>Location</p>
                <p className={`text-sm ${subtext}`}>New Delhi, India</p>
              </div>
            </div>

            <div className={`rounded-2xl p-6 border card-glow ${cardBg}`}>
              <p className={`font-bold text-sm mb-3 ${heading}`}>Connect on Social Media</p>
              <div className="flex gap-4">
                {[
                  { icon: <FaGithub />, href: '#', color: dark ? '#00D4FF' : '#0284C7', label: 'GitHub' },
                  { icon: <FaLinkedin />, href: '#', color: dark ? '#9B59FF' : '#7C3AED', label: 'LinkedIn' },
                  { icon: <FaTwitter />, href: '#', color: dark ? '#FF6EC7' : '#C026D3', label: 'Twitter' },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center text-lg transition-all duration-300 ${
                      dark
                        ? 'bg-[#111118] border-white/10 hover:border-white/30'
                        : 'bg-slate-100 border-slate-300 hover:border-slate-400 shadow-sm'
                    }`}
                    style={{ color: s.color }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for your message! Abhishek will get back to you soon.');
              setForm({ name: '', email: '', message: '' });
            }}
            className={`rounded-2xl p-8 border card-glow space-y-5 ${cardBg}`}
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${subtext}`}>Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors border ${inputBg}`}
                />
              </div>

              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${subtext}`}>Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors border ${inputBg}`}
                />
              </div>
            </div>

            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${subtext}`}>Your Message</label>
              <textarea
                rows={5}
                required
                placeholder="Hi Abhishek, I would like to discuss a project..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors resize-none border ${inputBg}`}
              />
            </div>

            <button
              type="submit"
              className={`inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-xl text-white font-semibold text-sm transition-all duration-300 ${
                dark
                  ? 'bg-gradient-to-r from-[#00D4FF] to-[#00B8E0] text-slate-950 font-bold shadow-[0_0_25px_rgba(0,212,255,0.3)] hover:shadow-[0_0_35px_rgba(0,212,255,0.5)]'
                  : 'bg-gradient-to-r from-[#0284C7] to-[#7C3AED] shadow-lg shadow-indigo-500/25 hover:opacity-95'
              }`}
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

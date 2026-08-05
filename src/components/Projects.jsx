import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaEye, FaGithub, FaChevronLeft, FaChevronRight, FaCheckCircle } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    category: 'Web Application',
    title: 'AI SaaS Platform',
    desc: 'A full-featured AI content generation platform with real-time collaboration, prompt library, and multi-model API integrations.',
    features: ['Real-time team workspace', 'Multi-AI provider support', 'Usage analytics & billing', 'Stripe checkout integration', 'Role-based access control'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI', 'Prisma'],
    color: '#00D4FF',
    lightColor: '#0284C7',
  },
  {
    category: 'E-Commerce',
    title: 'ShopVerse',
    desc: 'A modern full-stack e-commerce platform with real-time inventory tracking, smart search filters, and instant checkout.',
    features: ['Instant search & filtering', 'Wishlist & interactive cart', 'Stripe & PayPal payments', 'Admin dashboard analytics', 'Responsive mobile design'],
    stack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    color: '#9B59FF',
    lightColor: '#7C3AED',
  },
  {
    category: 'Interactive Web',
    title: '3D Portfolio Studio',
    desc: 'An immersive interactive 3D web experience with WebGL shaders, smooth page transitions, and interactive physics.',
    features: ['Three.js WebGL scenes', 'Framer Motion animations', 'Theme-aware lighting', 'Performance optimization', 'Custom particle systems'],
    stack: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    color: '#FF6EC7',
    lightColor: '#C026D3',
  },
  {
    category: 'Real-Time App',
    title: 'ChatSync Engine',
    desc: 'A high-concurrency real-time messaging application with encrypted group channels, voice notes, and live presence indicators.',
    features: ['WebSocket communication', 'Group & private channels', 'File & media sharing', 'Live online indicators', 'Message read receipts'],
    stack: ['React', 'Socket.io', 'Node.js', 'Redis', 'Tailwind CSS'],
    color: '#00E5A0',
    lightColor: '#059669',
  },
];

export default function Projects() {
  const swiperRef = useRef(null);
  const { dark } = useTheme();

  const cardBg = dark ? 'glass-card border-white/10' : 'bg-white border-slate-200/90 shadow-md shadow-slate-200/40';
  const subtext = dark ? 'text-slate-400' : 'text-slate-600';
  const heading = dark ? 'text-white' : 'text-slate-900';

  return (
    <section id="projects" className={`py-24 px-4 section-spotlight transition-colors duration-300 ${dark ? 'bg-[#0E131F]' : 'bg-[#F4F6FB]'}`}>
      <div className="max-w-container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className={`text-xs tracking-[3px] uppercase font-semibold ${dark ? 'text-[#00D4FF]' : 'text-[#0284C7]'}`}>Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-syne">
            <span className={heading}>Featured </span>
            <span className="gradient-text-cyan-purple">Projects</span>
          </h2>
          <p className={`mt-3 max-w-xl mx-auto text-sm ${subtext}`}>Explore recent engineering projects highlighting full-stack development, modern UI design, and interactive features.</p>
        </motion.div>

        <div className="relative">
          {/* Swiper Custom Navigation */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border flex items-center justify-center transition-all hidden lg:flex ${
              dark
                ? 'bg-[#111118] border-white/15 text-slate-200 hover:border-[#00D4FF] hover:text-[#00D4FF] shadow-lg shadow-black/40'
                : 'bg-white border-slate-300 text-slate-700 hover:border-[#0284C7] hover:text-[#0284C7] shadow-md'
            }`}
            aria-label="Previous Project"
          >
            <FaChevronLeft size={14} />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border flex items-center justify-center transition-all hidden lg:flex ${
              dark
                ? 'bg-[#111118] border-white/15 text-slate-200 hover:border-[#00D4FF] hover:text-[#00D4FF] shadow-lg shadow-black/40'
                : 'bg-white border-slate-300 text-slate-700 hover:border-[#0284C7] hover:text-[#0284C7] shadow-md'
            }`}
            aria-label="Next Project"
          >
            <FaChevronRight size={14} />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            onSwiper={(s) => { swiperRef.current = s; }}
            className="pb-14"
          >
            {projects.map((p, i) => {
              const activeAccent = dark ? p.color : p.lightColor;

              return (
                <SwiperSlide key={i}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center p-1">
                    {/* Project Preview Window */}
                    <div className={`relative rounded-2xl overflow-hidden border p-5 card-glow ${cardBg}`}>
                      {/* Window Dots */}
                      <div className="flex gap-2 mb-4">
                        <span className="w-3 h-3 rounded-full bg-rose-500/70 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/70 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/70 inline-block" />
                      </div>

                      <div
                        className="aspect-[16/10] rounded-xl flex items-center justify-center p-6 text-center border relative overflow-hidden transition-all duration-300"
                        style={{
                          background: dark
                            ? `radial-gradient(circle at center, ${p.color}22 0%, #111118 80%)`
                            : `radial-gradient(circle at center, ${p.lightColor}15 0%, #F8FAFC 80%)`,
                          borderColor: dark ? `${p.color}33` : `${p.lightColor}33`,
                        }}
                      >
                        <div>
                          <div
                            className="w-18 h-18 w-[72px] h-[72px] rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
                            style={{
                              background: `${activeAccent}22`,
                              border: `1.5px solid ${activeAccent}66`,
                            }}
                          >
                            <span className="text-3xl font-extrabold font-syne" style={{ color: activeAccent }}>
                              {p.title[0]}{p.title[1]}
                            </span>
                          </div>
                          <p className={`font-syne font-bold text-2xl ${heading}`}>{p.title}</p>
                          <p className={`text-xs mt-1 font-semibold ${subtext}`}>{p.category}</p>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <span className={`inline-block px-3.5 py-1 rounded-full border text-xs font-semibold mb-4 ${
                        dark
                          ? 'bg-[#111118] border-white/15 text-[#00D4FF]'
                          : 'bg-white border-slate-300 text-[#0284C7] shadow-sm'
                      }`}>
                        {p.category}
                      </span>
                      <h3 className={`text-3xl font-bold font-syne mb-3 ${heading}`}>{p.title}</h3>
                      <p className={`text-sm leading-relaxed mb-6 ${subtext}`}>{p.desc}</p>

                      {/* Key Features */}
                      <p className={`text-xs font-bold tracking-[2px] uppercase mb-3 ${subtext}`}>Key Features</p>
                      <ul className="space-y-2 mb-6">
                        {p.features.map((f) => (
                          <li key={f} className={`flex items-start gap-2.5 text-sm font-medium ${heading}`}>
                            <FaCheckCircle className="mt-1 text-xs shrink-0" style={{ color: activeAccent }} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      <p className={`text-xs font-bold tracking-[2px] uppercase mb-3 ${subtext}`}>Tech Stack</p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className={`px-3 py-1 rounded-full border text-xs font-fira font-medium transition-colors ${
                              dark
                                ? 'bg-[#111118] border-white/15 text-slate-200'
                                : 'bg-white border-slate-200 text-slate-800 shadow-sm'
                            }`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* External Action Links */}
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="#"
                          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-300 ${
                            dark
                              ? 'bg-gradient-to-r from-[#00D4FF] to-[#00B8E0] text-slate-950 font-bold hover:shadow-[0_0_25px_rgba(0,212,255,0.4)]'
                              : 'bg-gradient-to-r from-[#0284C7] to-[#7C3AED] hover:opacity-95 shadow-md shadow-indigo-500/20'
                          }`}
                        >
                          <FaEye /> Live Demo
                        </a>
                        <a
                          href="#"
                          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-semibold transition-all duration-300 ${
                            dark
                              ? 'border-white/20 text-slate-200 hover:border-white hover:bg-white/10'
                              : 'border-slate-300 text-slate-800 bg-white hover:border-slate-400 hover:bg-slate-50 shadow-sm'
                          }`}
                        >
                          <FaGithub /> Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

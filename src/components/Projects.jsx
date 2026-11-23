import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaEye, FaGithub, FaChevronLeft, FaChevronRight, FaCheckCircle, FaLock, FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    category: 'Healthcare & Telemedicine',
    title: 'MediBook',
    desc: 'A complete doctor appointment booking and digital prescription management platform with doctor search, specialty filters, verified profiles, and instant consultation scheduling.',
    features: [
      'Doctor search & specialty filtering',
      'Real-time appointment slot booking',
      'Digital prescription management',
      'Verified doctor profiles & rating system',
      'Patient consultation dashboard',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    color: '#00D4FF',
    lightColor: '#0284C7',
    image: '/project/projectimage1.png',
    live: 'https://docter-prescriptions.netlify.app/',
    github: 'https://github.com/BookDocter/frontend',
  },
  {
    category: 'Doctor Appointment Portal',
    title: 'Prescripto',
    desc: 'A modern medical consultation portal that connects patients with trusted healthcare specialists, offering seamless doctor discovery, slot booking, and profile management.',
    features: [
      'Browse trusted doctors by specialty',
      'Interactive appointment booking flow',
      'Responsive mobile & desktop UI',
      'Doctor profile & availability management',
      'Hassle-free consultation scheduling',
    ],
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'REST API', 'Vite'],
    color: '#4F46E5',
    lightColor: '#4338CA',
    image: '/project/projectImage2.png',
    live: 'https://docter-prescriptions.netlify.app/',
    github: 'https://github.com/BookDocter/frontend',
  },
  {
    category: 'Food Delivery Platform',
    title: 'Tomato',
    desc: 'A vibrant online food ordering platform featuring interactive cuisine menus, dynamic food cart calculation, real-time checkout, and responsive restaurant dish exploration.',
    features: [
      'Interactive multi-cuisine menu with category filters',
      'Real-time cart calculation & state management',
      'User authentication & order placement flow',
      'Responsive restaurant interface optimized for mobile',
      'Visual dish showcase & culinary menu explorer',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    color: '#FF6347',
    lightColor: '#E11D48',
    image: '/project/projectimage3.png',
    live: '#',
    github: 'https://github.com/ErAbhishekNamdev',
  },
  {
    category: 'Mental Wellness & Health',
    title: 'MindLeap',
    desc: 'A holistic mental wellness web application providing guided mindfulness exercises, stress management pathways, therapy consultation scheduling, and wellness progress tracking.',
    features: [
      'Mindful meditation & stress reduction guides',
      'Therapist consultation & service booking',
      'Interactive client testimonials & wellness tracking',
      'Calming aesthetic with accessibility-first design',
      'Responsive modern layout with interactive animations',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: '#10B981',
    lightColor: '#059669',
    image: '/project/projectimage4.png',
    live: '#',
    github: 'https://github.com/ErAbhishekNamdev',
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
      <div className="max-w-container mx-auto px-4 md:px-6 2xl:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className={`text-xs tracking-[3px] uppercase font-semibold ${dark ? 'text-[#00D4FF]' : 'text-[#0284C7]'}`}>Portfolio</span>
          <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-bold mt-2 font-syne">
            <span className={heading}>Featured </span>
            <span className="gradient-text-cyan-purple">Projects</span>
          </h2>
          <p className={`mt-3 max-w-xl 2xl:max-w-2xl mx-auto text-sm 2xl:text-base ${subtext}`}>Explore recent engineering projects highlighting full-stack development, modern UI design, and interactive features.</p>
        </motion.div>

        <div className="relative px-2 sm:px-4 lg:px-8 2xl:px-10">
          {/* Swiper Custom Navigation - in outer margins so it never overlaps the preview card */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`absolute left-0 lg:-left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border flex items-center justify-center transition-all hidden lg:flex shadow-xl hover:scale-110 active:scale-95 ${dark
              ? 'bg-[#111118]/95 border-white/20 text-slate-200 hover:border-[#00D4FF] hover:text-[#00D4FF] shadow-black/50'
              : 'bg-white border-slate-300 text-slate-700 hover:border-[#0284C7] hover:text-[#0284C7] shadow-slate-200'
              }`}
            aria-label="Previous Project"
          >
            <FaChevronLeft size={14} />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`absolute right-0 lg:-right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border flex items-center justify-center transition-all hidden lg:flex shadow-xl hover:scale-110 active:scale-95 ${dark
              ? 'bg-[#111118]/95 border-white/20 text-slate-200 hover:border-[#00D4FF] hover:text-[#00D4FF] shadow-black/50'
              : 'bg-white border-slate-300 text-slate-700 hover:border-[#0284C7] hover:text-[#0284C7] shadow-slate-200'
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
                  <div className="grid lg:grid-cols-[1.25fr_1fr] 2xl:grid-cols-[1.3fr_0.9fr] gap-6 lg:gap-10 2xl:gap-14 items-center p-1">
                    {/* Project Preview Window - Large & High-Impact */}
                    <div
                      className={`relative w-full rounded-2xl overflow-hidden border p-3 sm:p-4.5 card-glow group transition-all duration-300 ${cardBg}`}
                      style={{
                        boxShadow: dark
                          ? `0 25px 60px rgba(0,0,0,0.65), 0 0 50px ${activeAccent}20`
                          : `0 18px 45px rgba(0,0,0,0.09)`,
                      }}
                    >
                      {/* Browser Title Bar */}
                      <div className="flex items-center justify-between gap-3 mb-3 px-1">
                        {/* Traffic light dots */}
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm inline-block" />
                          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm inline-block" />
                          <span className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm inline-block" />
                        </div>

                        {/* Centered Realistic Address Bar */}
                        <div
                          className={`flex-1 max-w-[280px] sm:max-w-[360px] flex items-center justify-center gap-1.5 px-3 py-1 rounded-lg border text-[11px] font-mono select-none ${dark
                            ? 'bg-black/35 border-white/10 text-slate-300'
                            : 'bg-slate-100/90 border-slate-200 text-slate-600'
                            }`}
                        >
                          <FaLock className="text-[9px] text-emerald-400 shrink-0" />
                          <span className="truncate">
                            {p.live && p.live !== '#'
                              ? p.live.replace('https://', '')
                              : `${p.title.toLowerCase()}.dev`}
                          </span>
                        </div>

                        {/* External link icon indicator */}
                        <div className="shrink-0 text-slate-400">
                          <FaExternalLinkAlt className="text-[11px] opacity-60 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>

                      {/* Project Image Viewport - Generously Sized for Maximum Clarity */}
                      <a
                        href={p.live && p.live !== '#' ? p.live : p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block aspect-[16/9.5] sm:aspect-[16/9.2] lg:aspect-[1.88/1] 2xl:aspect-[1.92/1] w-full min-h-[260px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[400px] xl:min-h-[440px] 2xl:min-h-[480px] rounded-xl border relative overflow-hidden transition-all duration-300 shadow-inner bg-slate-950/20"
                        style={{
                          borderColor: dark ? `${activeAccent}33` : `${activeAccent}40`,
                        }}
                      >
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-contain sm:object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          loading="lazy"
                        />

                        {/* Subtle Hover Action Overlay */}
                        <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/90 text-cyan-300 text-xs font-bold border border-cyan-400/40 shadow-2xl backdrop-blur-md transform scale-95 group-hover:scale-100 transition-transform">
                            <FaEye className="text-sm" />
                            {p.live && p.live !== '#' ? 'Open Live Preview' : 'View Source Code'}
                          </span>
                        </div>
                      </a>
                    </div>

                    {/* Project Details */}
                    <div>
                      <span className={`inline-block px-3.5 py-1 rounded-full border text-xs font-semibold mb-4 ${dark
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
                            className={`px-3 py-1 rounded-full border text-xs font-fira font-medium transition-colors ${dark
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
                        {p.live && p.live !== '#' ? (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-300 ${dark
                              ? 'bg-gradient-to-r from-[#00D4FF] to-[#00B8E0] text-slate-950 font-bold hover:shadow-[0_0_25px_rgba(0,212,255,0.4)]'
                              : 'bg-gradient-to-r from-[#0284C7] to-[#7C3AED] hover:opacity-95 shadow-md shadow-indigo-500/20'
                              }`}
                          >
                            <FaEye /> Live Demo
                          </a>
                        ) : null}
                        {p.github && p.github !== '#' ? (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-semibold transition-all duration-300 ${dark
                              ? 'border-white/20 text-slate-200 hover:border-white hover:bg-white/10'
                              : 'border-slate-300 text-slate-800 bg-white hover:border-slate-400 hover:bg-slate-50 shadow-sm'
                              }`}
                          >
                            <FaGithub /> Source Code
                          </a>
                        ) : (
                          <a
                            href="https://github.com/ErAbhishekNamdev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-semibold transition-all duration-300 ${dark
                              ? 'border-white/20 text-slate-200 hover:border-white hover:bg-white/10'
                              : 'border-slate-300 text-slate-800 bg-white hover:border-slate-400 hover:bg-slate-50 shadow-sm'
                              }`}
                          >
                            <FaGithub /> Source Code
                          </a>
                        )}
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

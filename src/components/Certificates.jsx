import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight, FaAward, FaExternalLinkAlt, FaCloud, FaCalendarAlt, FaCode, FaPaintBrush } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';
import 'swiper/css';
import 'swiper/css/pagination';

const certificates = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    gradientBg: 'linear-gradient(135deg, #FF9900, #CC7A00)',
    accent: '#FF9900',
    icon: <FaCloud />,
  },
  {
    title: 'Meta React Developer Specialization',
    issuer: 'Meta (Coursera)',
    date: '2023',
    gradientBg: 'linear-gradient(135deg, #00B4A6, #00D4FF)',
    accent: '#00D4FF',
    icon: <FaCode />,
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Johns Hopkins University',
    date: '2023',
    gradientBg: 'linear-gradient(135deg, #1A3A7A, #2563EB)',
    accent: '#2563EB',
    icon: <FaCode />,
  },
  {
    title: 'UI/UX Design Specialization',
    issuer: 'California Institute of Arts',
    date: '2022',
    gradientBg: 'linear-gradient(135deg, #DC143C, #FF6EC7)',
    accent: '#FF6EC7',
    icon: <FaPaintBrush />,
  },
];

function CertificateCard({ cert }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden cursor-pointer select-none border border-white/20 shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ minHeight: 400 }}
    >
      {/* Background Banner Gradient */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{ background: cert.gradientBg }}
      />

      {/* Subtle Pattern */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)',
        }}
      />

      {/* Content Envelope Container */}
      <div className="relative p-5 flex flex-col h-full min-h-[400px]">
        {/* White Certificate Card */}
        <motion.div
          animate={{
            y: hovered ? -18 : 0,
            boxShadow: hovered
              ? '0 20px 40px rgba(0,0,0,0.35)'
              : '0 8px 20px rgba(0,0,0,0.15)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          className="bg-white rounded-xl overflow-hidden shadow-md"
          style={{ border: '1px solid rgba(255,255,255,0.6)' }}
        >
          <div className="p-5 text-center">
            <div
              className="rounded-lg p-4"
              style={{ border: '2px dashed #CBD5E1' }}
            >
              {/* Wax Seal Icon */}
              <div
                className="mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-md"
                style={{
                  background: `radial-gradient(circle, ${cert.accent}, ${cert.accent}DD)`,
                }}
              >
                <FaAward className="text-white text-xl" />
              </div>

              <p className="text-slate-700 text-[10px] tracking-[3px] uppercase font-bold">
                Certificate of Achievement
              </p>
              <div className="w-16 h-px bg-slate-200 mx-auto my-2.5" />
              <p className="text-slate-400 text-[10px]">This is awarded to</p>
              <p className="text-slate-900 font-extrabold text-sm mt-0.5 font-syne">
                Abhishek Namdev
              </p>
              <p className="text-slate-400 text-[9px] mt-1">for successfully completing the specialization</p>
            </div>
          </div>
        </motion.div>

        {/* Envelope Metadata Bottom */}
        <div className="mt-auto pt-5 pb-1">
          <h3 className="text-white font-bold text-base leading-snug drop-shadow-sm font-syne">
            {cert.title}
          </h3>

          <div className="flex items-center gap-4 mt-3">
            <span className="flex items-center gap-1.5 text-white/85 text-xs font-medium">
              {cert.icon}
              {cert.issuer}
            </span>
            <span className="flex items-center gap-1.5 text-white/85 text-xs font-medium">
              <FaCalendarAlt />
              {cert.date}
            </span>
          </div>

          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full bg-white/25 backdrop-blur-md text-white text-xs font-semibold border border-white/30 hover:bg-white/35 transition-colors"
          >
            Verify Credential <FaExternalLinkAlt className="text-[10px]" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default function Certificates() {
  const swiperRef = useRef(null);
  const { dark } = useTheme();

  const heading = dark ? 'text-white' : 'text-slate-900';
  const subtext = dark ? 'text-slate-400' : 'text-slate-600';

  return (
    <section id="certificates" className={`py-24 px-4 section-spotlight transition-colors duration-300 ${dark ? 'bg-[#05050A]' : 'bg-[#F4F6FB]'}`}>
      <div className="max-w-container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className={`text-xs tracking-[3px] uppercase font-semibold ${dark ? 'text-[#00D4FF]' : 'text-[#0284C7]'}`}>Credentials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-syne">
            <span className={heading}>Verified </span>
            <span className="gradient-text-cyan-purple">Certificates</span>
          </h2>
          <p className={`mt-3 max-w-xl mx-auto text-sm ${subtext}`}>Professional certifications and specialized training credentials. Hover to reveal certificate detail.</p>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border flex items-center justify-center transition-all hidden lg:flex ${
              dark
                ? 'bg-[#111118] border-white/15 text-slate-200 hover:border-[#00D4FF] hover:text-[#00D4FF] shadow-lg shadow-black/40'
                : 'bg-white border-slate-300 text-slate-700 hover:border-[#0284C7] hover:text-[#0284C7] shadow-md'
            }`}
            aria-label="Previous Certificate"
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
            aria-label="Next Certificate"
          >
            <FaChevronRight size={14} />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            onSwiper={(s) => { swiperRef.current = s; }}
            className="pb-14"
          >
            {certificates.map((cert, i) => (
              <SwiperSlide key={i}>
                <CertificateCard cert={cert} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
